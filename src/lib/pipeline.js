// Turns the /api/pipeline payload into the stages drawn on /pipeline.
// Step names must match the ones in .github/workflows/ci-cd.yml.
export const STAGES = [
  { id: "commit" },
  { id: "lint", step: "Lint" },
  { id: "test", step: "Test" },
  { id: "build", step: "Build" },
  { id: "budget", step: "Bundle budget" },
  { id: "lighthouse", step: "Lighthouse" },
  { id: "deploy", step: "Deploy" },
  { id: "smoke", step: "Smoke test" },
];

export function durationMs(start, end) {
  if (!start || !end) return null;
  const ms = new Date(end) - new Date(start);
  return Number.isFinite(ms) && ms >= 0 ? ms : null;
}

export function runState(run) {
  if (!run) return "none";
  if (run.status !== "completed") return "running";
  if (run.conclusion === "success") return "success";
  if (run.conclusion === "cancelled") return "cancelled";
  return "failure";
}

function stepState(step, runCompleted) {
  // A job that never started (e.g. deploy after a failed build) has no steps.
  if (!step) return runCompleted ? "skipped" : "pending";
  if (step.status === "in_progress") return "running";
  if (step.status !== "completed") return runCompleted ? "skipped" : "pending";
  if (step.conclusion === "success") return "success";
  if (step.conclusion === "skipped") return "skipped";
  return "failure";
}

export function buildStages(latest) {
  const steps = latest?.jobs?.flatMap((job) => job.steps) ?? [];
  const runCompleted = latest?.status === "completed";

  return STAGES.map((stage) => {
    if (!stage.step) return { ...stage, state: latest ? "success" : "pending", durationMs: null };
    const step = steps.find((candidate) => candidate.name === stage.step);
    return {
      ...stage,
      state: stepState(step, runCompleted),
      durationMs: durationMs(step?.startedAt, step?.completedAt),
    };
  });
}

export function formatDuration(ms) {
  if (ms == null) return "—";
  const seconds = Math.round(ms / 1000);
  if (seconds < 60) return `${seconds} s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes} min ${rest} s` : `${minutes} min`;
}

export const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const UNITS = [
  ["year", 31_536_000],
  ["month", 2_592_000],
  ["week", 604_800],
  ["day", 86_400],
  ["hour", 3_600],
  ["minute", 60],
  ["second", 1],
];

export function timeAgo(iso, language, now = Date.now()) {
  const seconds = Math.round((new Date(iso).getTime() - now) / 1000);
  const formatter = new Intl.RelativeTimeFormat(language, { numeric: "auto" });
  const [unit, size] = UNITS.find(([, length]) => Math.abs(seconds) >= length) ?? UNITS.at(-1);
  return formatter.format(Math.round(seconds / size), unit);
}
