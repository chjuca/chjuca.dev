import { useEffect, useState } from "react";

const POLL_RUNNING_MS = 10_000;
const POLL_IDLE_MS = 60_000;

async function getJson(url) {
  try {
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!(response.headers.get("content-type") ?? "").includes("application/json")) return null;
    return await response.json();
  } catch {
    return null;
  }
}

// Live pipeline state from the Worker API (polled faster while a run is in
// progress, paused while the tab is hidden) plus the metrics that the
// pipeline shipped with the current deploy.
export function usePipelineData() {
  const [data, setData] = useState({ loading: true, error: false, pipeline: null, metrics: null, history: [] });

  useEffect(() => {
    let cancelled = false;
    let timer = 0;
    const deployMetrics = Promise.all([getJson("/metrics.json"), getJson("/metrics-history.json")]);

    const poll = async () => {
      const [pipeline, [metrics, history]] = await Promise.all([getJson("/api/pipeline"), deployMetrics]);
      if (cancelled) return;

      const available = pipeline && !pipeline.error;
      setData({
        loading: false,
        error: !available,
        pipeline: available ? pipeline : null,
        metrics,
        history: Array.isArray(history) ? history : [],
      });

      const running = available && pipeline.latest && pipeline.latest.status !== "completed";
      timer = setTimeout(schedule, running ? POLL_RUNNING_MS : POLL_IDLE_MS);
    };
    const schedule = () => {
      if (document.hidden) timer = setTimeout(schedule, POLL_RUNNING_MS);
      else poll();
    };

    poll();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return data;
}
