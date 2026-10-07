// Runs against production right after a deploy: waits until the new build is
// live (its metrics.json carries this commit) and checks that every page, the
// CVs and the pipeline API respond.
const BASE_URL = process.argv[2] ?? "https://chjuca.dev";
const EXPECTED_SHA = process.env.GITHUB_SHA;
const WAIT_SECONDS = 120;

const PAGES = [
  "/",
  "/experience",
  "/experience/mapvx",
  "/projects",
  "/projects/chjuca-dev",
  "/pipeline",
  "/about",
  "/contact",
];
const FILES = [
  ["/cv/Carlos-Juca-Fullstack-ES.pdf", "application/pdf"],
  ["/cv/Carlos-Juca-Fullstack-EN.pdf", "application/pdf"],
  ["/sitemap.xml", "xml"],
  ["/metrics.json", "application/json"],
];

const get = (path) => fetch(`${BASE_URL}${path}${path.includes("?") ? "&" : "?"}smoke=${Date.now()}`, { cache: "no-store" });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDeploy() {
  if (!EXPECTED_SHA) return;
  for (let waited = 0; waited <= WAIT_SECONDS; waited += 5) {
    try {
      const metrics = await (await get("/metrics.json")).json();
      if (metrics.commit?.sha === EXPECTED_SHA) {
        console.log(`✓ production serves ${EXPECTED_SHA.slice(0, 7)} (after ${waited}s)`);
        return;
      }
    } catch {
      // Not deployed yet.
    }
    await sleep(5000);
  }
  throw new Error(`production did not serve ${EXPECTED_SHA} within ${WAIT_SECONDS}s`);
}

// Right after a deploy, Cloudflare can still route some requests to the
// previous version while the new one propagates, so each check is retried a
// few times before it counts as a failure.
const ATTEMPTS = 4;
const RETRY_MS = 5000;
const failures = [];

async function check(label, probe) {
  let result;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    result = await probe();
    if (result.ok) break;
    if (attempt < ATTEMPTS) await sleep(RETRY_MS);
  }
  console.log(`${result.ok ? "✓" : "✗"} ${label} → ${result.detail}`);
  if (!result.ok) failures.push(label);
}

const describe = (response) => `${response.status} ${response.headers.get("content-type") ?? ""}`.trim();

await waitForDeploy();

for (const path of PAGES) {
  await check(path, async () => {
    const response = await get(path);
    const html = await response.text();
    return { ok: response.ok && html.includes('<div id="root">'), detail: describe(response) };
  });
}

for (const [path, type] of FILES) {
  await check(path, async () => {
    const response = await get(path);
    return { ok: response.ok && (response.headers.get("content-type") ?? "").includes(type), detail: describe(response) };
  });
}

await check("main script", async () => {
  const index = await (await get("/")).text();
  const script = index.match(/\/assets\/index-[^"]+\.js/)?.[0];
  if (!script) return { ok: false, detail: "no script tag in index.html" };
  const asset = await get(script);
  const immutable = asset.headers.get("cache-control")?.includes("immutable");
  return { ok: asset.ok && immutable, detail: `${script} ${asset.status}${immutable ? ", cached as immutable" : ""}` };
});

await check("/api/pipeline", async () => {
  const response = await get("/api/pipeline");
  return { ok: (response.headers.get("content-type") ?? "").includes("application/json"), detail: describe(response) };
});

if (failures.length > 0) {
  console.error(`\n${failures.length} check(s) failed: ${failures.join(", ")}`);
  process.exit(1);
}
console.log("\nAll smoke checks passed.");
