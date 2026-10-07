// Fails the pipeline when the gzipped JavaScript or CSS grows past its budget,
// and writes reports/bundle.json for the metrics step.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";

const ASSETS_DIR = "dist/assets";
const BUDGET_KB = { js: 170, css: 12 };

const totals = { js: { raw: 0, gzip: 0 }, css: { raw: 0, gzip: 0 } };
for (const file of readdirSync(ASSETS_DIR)) {
  const type = file.split(".").pop();
  if (!(type in totals)) continue;
  const content = readFileSync(`${ASSETS_DIR}/${file}`);
  totals[type].raw += content.length;
  totals[type].gzip += gzipSync(content, { level: 9 }).length;
}

mkdirSync("reports", { recursive: true });
writeFileSync("reports/bundle.json", JSON.stringify({ ...totals, budgetKb: BUDGET_KB }, null, 2));

const kb = (bytes) => (bytes / 1024).toFixed(1);
let failed = false;
for (const [type, { gzip }] of Object.entries(totals)) {
  const ok = gzip <= BUDGET_KB[type] * 1024;
  failed ||= !ok;
  console.log(`${ok ? "✓" : "✗"} ${type.toUpperCase()}: ${kb(gzip)} KB gzip (budget ${BUDGET_KB[type]} KB)`);
}

if (failed) {
  console.error("Bundle budget exceeded.");
  process.exit(1);
}
