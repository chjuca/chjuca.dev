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

const failures = [];
const check = (ok, message) => {
  console.log(`${ok ? "✓" : "✗"} ${message}`);
  if (!ok) failures.push(message);
};

await waitForDeploy();

for (const path of PAGES) {
  const response = await get(path);
  const html = await response.text();
  check(response.ok && html.includes('<div id="root">'), `${path} → ${response.status}`);
}

for (const [path, type] of FILES) {
  const response = await get(path);
  check(response.ok && (response.headers.get("content-type") ?? "").includes(type), `${path} → ${response.status}`);
}

const index = await (await get("/")).text();
const script = index.match(/\/assets\/index-[^"]+\.js/)?.[0];
const asset = script && (await get(script));
check(
  asset?.ok && asset.headers.get("cache-control")?.includes("immutable"),
  `${script} → ${asset?.status}, cached as immutable`,
);

const api = await get("/api/pipeline");
check((api.headers.get("content-type") ?? "").includes("application/json"), `/api/pipeline → ${api.status} (JSON)`);

if (failures.length > 0) {
  console.error(`\n${failures.length} check(s) failed.`);
  process.exit(1);
}
console.log("\nAll smoke checks passed.");
