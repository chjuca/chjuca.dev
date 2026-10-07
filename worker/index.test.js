// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import worker from "./index.js";
import { REPO, WORKFLOW } from "./pipeline.js";

const run = (overrides = {}) => ({
  id: 42,
  run_number: 7,
  status: "completed",
  conclusion: "success",
  event: "push",
  head_sha: "abc1234def",
  head_commit: { message: "Add pipeline page\n\nLonger body", author: { name: "chjuca" } },
  run_started_at: "2026-10-06T10:00:00Z",
  updated_at: "2026-10-06T10:02:30Z",
  html_url: "https://github.com/chjuca/chjuca.dev/actions/runs/42",
  ...overrides,
});

const jobs = {
  jobs: [
    {
      name: "Build & test",
      status: "completed",
      conclusion: "success",
      started_at: "2026-10-06T10:00:05Z",
      completed_at: "2026-10-06T10:01:40Z",
      html_url: "https://github.com/chjuca/chjuca.dev/actions/runs/42/job/1",
      steps: [
        { name: "Lint", status: "completed", conclusion: "success", started_at: "a", completed_at: "b" },
      ],
    },
  ],
};

function mockGitHub({ runs = [run()], status = 200 } = {}) {
  const fetchMock = vi.fn(async (url) => {
    if (status !== 200) return new Response("rate limited", { status });
    if (url.includes(`/actions/workflows/${WORKFLOW}/runs`)) return Response.json({ workflow_runs: runs });
    if (url.includes("/jobs")) return Response.json(jobs);
    throw new Error(`unexpected ${url}`);
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

function setup() {
  const store = new Map();
  vi.stubGlobal("caches", {
    default: {
      match: vi.fn(async (request) => store.get(request.url)),
      put: vi.fn(async (request, response) => store.set(request.url, response)),
    },
  });
  const ctx = { waitUntil: vi.fn((promise) => promise) };
  const env = { ASSETS: { fetch: vi.fn(async () => new Response("asset")) } };
  return { env, ctx, store };
}

const request = (path, init) => new Request(`https://chjuca.dev${path}`, init);

describe("worker", () => {
  beforeEach(() => vi.restoreAllMocks());
  afterEach(() => vi.unstubAllGlobals());

  it("returns the latest runs with the steps of the most recent one", async () => {
    const { env, ctx } = setup();
    const fetchMock = mockGitHub();

    const response = await worker.fetch(request("/api/pipeline"), env, ctx);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("public, max-age=60");
    expect(body.repo).toBe(REPO);
    expect(body.runs[0]).toMatchObject({ number: 7, sha: "abc1234def", message: "Add pipeline page", author: "chjuca" });
    expect(body.latest.jobs[0].steps[0]).toMatchObject({ name: "Lint", conclusion: "success" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("caches for a shorter time while a run is in progress", async () => {
    const { env, ctx } = setup();
    mockGitHub({ runs: [run({ status: "in_progress", conclusion: null })] });

    const response = await worker.fetch(request("/api/pipeline"), env, ctx);

    expect(response.headers.get("Cache-Control")).toBe("public, max-age=10");
  });

  it("serves repeated requests from the cache", async () => {
    const { env, ctx } = setup();
    const fetchMock = mockGitHub();

    await worker.fetch(request("/api/pipeline"), env, ctx);
    await worker.fetch(request("/api/pipeline"), env, ctx);

    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("reports GitHub failures as a short-lived 502", async () => {
    const { env, ctx } = setup();
    mockGitHub({ status: 403 });

    const response = await worker.fetch(request("/api/pipeline"), env, ctx);

    expect(response.status).toBe(502);
    expect(response.headers.get("Cache-Control")).toBe("public, max-age=15");
    expect((await response.json()).error).toBe("github_unavailable");
  });

  it("handles an empty run history", async () => {
    const { env, ctx } = setup();
    mockGitHub({ runs: [] });

    const body = await (await worker.fetch(request("/api/pipeline"), env, ctx)).json();

    expect(body.runs).toEqual([]);
    expect(body.latest).toBeNull();
  });

  it("sends the GitHub token when one is configured", async () => {
    const { env, ctx } = setup();
    const fetchMock = mockGitHub();

    await worker.fetch(request("/api/pipeline"), { ...env, GITHUB_TOKEN: "test-token" }, ctx);

    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBe("Bearer test-token");
  });

  it("rejects other methods and unknown API routes", async () => {
    const { env, ctx } = setup();

    expect((await worker.fetch(request("/api/pipeline", { method: "POST" }), env, ctx)).status).toBe(405);
    expect((await worker.fetch(request("/api/nope"), env, ctx)).status).toBe(404);
  });

  it("delegates everything else to the static assets", async () => {
    const { env, ctx } = setup();

    const response = await worker.fetch(request("/projects"), env, ctx);

    expect(await response.text()).toBe("asset");
    expect(env.ASSETS.fetch).toHaveBeenCalledTimes(1);
  });
});
