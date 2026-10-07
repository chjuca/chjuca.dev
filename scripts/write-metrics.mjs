// Gathers the reports produced earlier in the pipeline into dist/metrics.json,
// and appends this build to dist/metrics-history.json, so the deployed site
// carries the quality numbers of its own build. No database needed: the
// history is read back from production on the next run.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const HISTORY_LENGTH = 30;

const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
};
const git = (args) => execSync(`git ${args}`, { encoding: "utf8" }).trim();

const tests = readJson("reports/tests.json");
const coverage = readJson("coverage/coverage-summary.json");
const bundle = readJson("reports/bundle.json");
const lighthouseRuns = readJson("reports/lighthouse/manifest.json") ?? [];
const lighthouse = (lighthouseRuns.find((run) => run.isRepresentativeRun) ?? lighthouseRuns[0])?.summary;

const { GITHUB_SHA, GITHUB_RUN_ID, GITHUB_RUN_NUMBER, GITHUB_SERVER_URL, GITHUB_REPOSITORY } = process.env;
const sha = GITHUB_SHA ?? git("rev-parse HEAD");

const metrics = {
  generatedAt: new Date().toISOString(),
  commit: { sha, message: git("log -1 --format=%s"), date: git("log -1 --format=%cI") },
  run: GITHUB_RUN_ID
    ? {
        id: Number(GITHUB_RUN_ID),
        number: Number(GITHUB_RUN_NUMBER),
        url: `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`,
      }
    : null,
  tests: tests && {
    total: tests.numTotalTests,
    passed: tests.numPassedTests,
    failed: tests.numFailedTests,
    suites: tests.numTotalTestSuites,
  },
  coverage: coverage && {
    lines: coverage.total.lines.pct,
    statements: coverage.total.statements.pct,
    functions: coverage.total.functions.pct,
    branches: coverage.total.branches.pct,
  },
  bundle: bundle && { jsGzip: bundle.js.gzip, cssGzip: bundle.css.gzip, budgetKb: bundle.budgetKb },
  lighthouse: lighthouse && {
    performance: lighthouse.performance,
    accessibility: lighthouse.accessibility,
    bestPractices: lighthouse["best-practices"],
    seo: lighthouse.seo,
  },
};

writeFileSync("dist/metrics.json", JSON.stringify(metrics, null, 2));

let history = [];
if (process.env.METRICS_HISTORY_URL) {
  try {
    const response = await fetch(process.env.METRICS_HISTORY_URL, { cache: "no-store" });
    if (response.ok) history = await response.json();
  } catch {
    // First deploy or production unreachable: start a new history.
  }
}
if (!Array.isArray(history)) history = [];

history = history.filter((entry) => entry.sha !== sha.slice(0, 7));
history.push({
  sha: sha.slice(0, 7),
  date: metrics.generatedAt,
  jsGzip: metrics.bundle?.jsGzip ?? null,
  cssGzip: metrics.bundle?.cssGzip ?? null,
  performance: metrics.lighthouse?.performance ?? null,
  tests: metrics.tests?.total ?? null,
});
writeFileSync("dist/metrics-history.json", JSON.stringify(history.slice(-HISTORY_LENGTH)));

console.log(JSON.stringify(metrics, null, 2));
