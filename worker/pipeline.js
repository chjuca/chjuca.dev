// Live state of the CI/CD pipeline, read from the GitHub Actions API and
// cached at the edge. Kept out of index.js because the Workers runtime only
// accepts handlers as exports of the main module.

export const REPO = "chjuca/chjuca.dev";
export const WORKFLOW = "ci-cd.yml";
const GITHUB_API = "https://api.github.com";

// Seconds to cache the API response at the edge and in the browser: short
// while a run is in progress so the page feels live, longer otherwise.
const MAX_AGE_RUNNING = 10;
const MAX_AGE_IDLE = 60;
const MAX_AGE_ERROR = 15;

export async function handlePipeline(request, env, ctx) {
  if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405, 0);

  const cache = caches.default;
  const cacheKey = new Request(new URL("/api/pipeline", request.url));
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let response;
  try {
    const body = await loadPipeline(env);
    const running = body.latest && body.latest.status !== "completed";
    response = json(body, 200, running ? MAX_AGE_RUNNING : MAX_AGE_IDLE);
  } catch (error) {
    // Cache failures briefly too, so a GitHub outage or rate limit isn't hammered.
    response = json({ error: "github_unavailable", detail: error.message }, 502, MAX_AGE_ERROR);
  }

  ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

export async function loadPipeline(env) {
  const { workflow_runs: runs = [] } = await github(
    `/repos/${REPO}/actions/workflows/${WORKFLOW}/runs?branch=main&per_page=10`,
    env,
  );
  const latestRun = runs[0];
  const jobs = latestRun ? (await github(`/repos/${REPO}/actions/runs/${latestRun.id}/jobs`, env)).jobs : [];

  return {
    repo: REPO,
    workflowUrl: `https://github.com/${REPO}/actions/workflows/${WORKFLOW}`,
    fetchedAt: new Date().toISOString(),
    runs: runs.map(toRun),
    latest: latestRun ? { ...toRun(latestRun), jobs: jobs.map(toJob) } : null,
  };
}

async function github(path, env) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "chjuca.dev",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional read-only token: unauthenticated calls share a small rate limit.
  if (env.GITHUB_TOKEN) headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;

  const response = await fetch(`${GITHUB_API}${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);
  return response.json();
}

function toRun(run) {
  const message = run.head_commit?.message ?? run.display_title ?? "";
  return {
    id: run.id,
    number: run.run_number,
    status: run.status,
    conclusion: run.conclusion,
    event: run.event,
    sha: run.head_sha,
    message: message.split("\n")[0],
    author: run.head_commit?.author?.name ?? run.actor?.login ?? null,
    startedAt: run.run_started_at ?? run.created_at,
    updatedAt: run.updated_at,
    url: run.html_url,
  };
}

function toJob(job) {
  return {
    name: job.name,
    status: job.status,
    conclusion: job.conclusion,
    startedAt: job.started_at,
    completedAt: job.completed_at,
    url: job.html_url,
    steps: (job.steps ?? []).map((step) => ({
      name: step.name,
      status: step.status,
      conclusion: step.conclusion,
      startedAt: step.started_at,
      completedAt: step.completed_at,
    })),
  };
}

export function json(body, status, maxAge) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": maxAge ? `public, max-age=${maxAge}` : "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
