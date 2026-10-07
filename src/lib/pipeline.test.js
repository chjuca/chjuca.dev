import { describe, expect, it } from "vitest";
import { buildStages, formatDuration, formatKb, runState, timeAgo } from "./pipeline";

const step = (name, status, conclusion, seconds = 10) => ({
  name,
  status,
  conclusion,
  startedAt: "2026-10-06T10:00:00Z",
  completedAt: status === "completed" ? new Date(Date.parse("2026-10-06T10:00:00Z") + seconds * 1000).toISOString() : null,
});

describe("pipeline stages", () => {
  it("maps workflow steps to stages with their duration", () => {
    const stages = buildStages({
      status: "completed",
      jobs: [
        { steps: [step("Lint", "completed", "success", 8), step("Test", "completed", "success", 21)] },
        { steps: [step("Deploy", "completed", "success", 40)] },
      ],
    });

    const byId = Object.fromEntries(stages.map((stage) => [stage.id, stage]));
    expect(byId.commit.state).toBe("success");
    expect(byId.lint).toMatchObject({ state: "success", durationMs: 8000 });
    expect(byId.test.durationMs).toBe(21000);
    expect(byId.deploy.state).toBe("success");
    expect(byId.lighthouse.state).toBe("skipped");
  });

  it("shows running and pending stages while a run is in progress", () => {
    const stages = buildStages({
      status: "in_progress",
      jobs: [{ steps: [step("Lint", "completed", "success"), step("Test", "in_progress", null)] }],
    });

    expect(stages.map((stage) => stage.state)).toEqual([
      "success",
      "success",
      "running",
      "pending",
      "pending",
      "pending",
      "pending",
      "pending",
    ]);
  });

  it("marks failed steps", () => {
    const [, lint] = buildStages({ status: "completed", jobs: [{ steps: [step("Lint", "completed", "failure")] }] });
    expect(lint.state).toBe("failure");
  });

  it("returns pending stages when there is no run yet", () => {
    expect(buildStages(null).every((stage) => stage.state === "pending")).toBe(true);
  });

  it("summarises the state of a run", () => {
    expect(runState(null)).toBe("none");
    expect(runState({ status: "queued" })).toBe("running");
    expect(runState({ status: "completed", conclusion: "success" })).toBe("success");
    expect(runState({ status: "completed", conclusion: "cancelled" })).toBe("cancelled");
    expect(runState({ status: "completed", conclusion: "failure" })).toBe("failure");
  });
});

describe("formatting", () => {
  it("formats durations", () => {
    expect(formatDuration(null)).toBe("—");
    expect(formatDuration(12_400)).toBe("12 s");
    expect(formatDuration(72_000)).toBe("1 min 12 s");
    expect(formatDuration(120_000)).toBe("2 min");
  });

  it("formats sizes and relative times", () => {
    const now = Date.parse("2026-10-06T12:00:00Z");
    expect(formatKb(143_360)).toBe("140.0 KB");
    expect(timeAgo("2026-10-06T10:00:00Z", "en", now)).toBe("2 hours ago");
    expect(timeAgo("2026-10-06T11:59:30Z", "es", now)).toBe("hace 30 segundos");
  });
});
