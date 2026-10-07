import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiPlay } from "react-icons/fi";
import { useOutletContext } from "react-router";
import { ExternalLink } from "../components/ExternalLink";
import { PageHeader } from "../components/PageHeader";
import { BundleTrend } from "../components/pipeline/BundleTrend";
import { LighthouseScores } from "../components/pipeline/LighthouseScores";
import { PipelineGraph } from "../components/pipeline/PipelineGraph";
import { RunHistory } from "../components/pipeline/RunHistory";
import { StageDetails } from "../components/pipeline/StageDetails";
import { SectionHeading } from "../components/SectionHeading";
import { usePageMeta } from "../hooks/usePageMeta";
import { usePipelineData } from "../hooks/usePipelineData";
import { buildStages, formatKb, runState, STAGES, timeAgo } from "../lib/pipeline";

const REPO = "chjuca/chjuca.dev";
const REPLAY_STEP_MS = 650;

export function PipelinePage() {
  const { t, language } = useOutletContext();
  const page = t.pages.pipeline;
  usePageMeta(page.meta);

  const { loading, error, pipeline, metrics, history } = usePipelineData();
  const [selected, setSelected] = useState("deploy");
  const [replayStep, setReplayStep] = useState(null);
  const details = useRef(null);

  // On narrow screens the details sit below all eight stages, so bring them into view.
  const selectStage = (id) => {
    setSelected(id);
    if (window.matchMedia?.("(max-width: 899px)").matches) {
      details.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  // Replay walks through the stages one by one, then returns to live data.
  useEffect(() => {
    if (replayStep == null) return undefined;
    const timer = setTimeout(
      () => setReplayStep((step) => (step >= STAGES.length ? null : step + 1)),
      REPLAY_STEP_MS,
    );
    return () => clearTimeout(timer);
  }, [replayStep]);

  const latest = pipeline?.latest ?? null;
  const liveStages = buildStages(latest);
  const stages =
    replayStep == null
      ? liveStages
      : liveStages.map((stage, index) => ({
          ...stage,
          state: index < replayStep ? "success" : index === replayStep ? "running" : "pending",
          durationMs: index < replayStep ? stage.durationMs : null,
        }));
  const status = loading ? "loading" : error ? "error" : runState(latest);

  return (
    <>
      <PageHeader index="03" label={page.label} title={page.title} intro={page.intro} />

      <section className="section section--tight container" aria-label={page.graphLabel}>
        <div className="pipeline-panel reveal">
          <div className="pipeline-panel__top">
            <p className="pipeline-status" data-state={status}>
              <span className="pipeline-status__dot" aria-hidden="true" />
              {page.status[status]}
              {latest && status !== "error" && ` · ${timeAgo(latest.updatedAt, language)}`}
            </p>
            <div className="pipeline-panel__actions">
              <button
                type="button"
                className="button button--dark button--small"
                onClick={() => setReplayStep(0)}
                disabled={replayStep != null || !latest}
              >
                <FiPlay aria-hidden="true" />
                {replayStep != null ? page.replaying : page.replay}
              </button>
              {latest && (
                <ExternalLink className="button button--dark button--small" href={latest.url}>
                  <FaGithub aria-hidden="true" />
                  {page.viewRun}
                </ExternalLink>
              )}
            </div>
          </div>

          <PipelineGraph stages={stages} texts={page} selected={selected} onSelect={selectStage} />
          <div ref={details}>
            <StageDetails
              stage={stages.find((stage) => stage.id === selected)}
              texts={page}
              latest={latest}
              metrics={metrics}
              repo={REPO}
              language={language}
            />
          </div>
        </div>
      </section>

      {metrics && (
        <section className="section container" aria-labelledby="quality-title">
          <SectionHeading id="quality-title" label={page.qualityLabel} title={page.qualityTitle} />
          <div className="quality-grid">
            {metrics.lighthouse && (
              <article className="info-card quality-card quality-card--wide reveal" data-spotlight>
                <h3 className="info-card__title">{page.lighthouseTitle}</h3>
                <LighthouseScores scores={metrics.lighthouse} labels={page.lighthouseLabels} />
                <p className="info-card__text">{page.lighthouseNote}</p>
              </article>
            )}
            {metrics.tests && (
              <article className="info-card quality-card reveal" data-spotlight>
                <h3 className="info-card__title">{page.testsTitle}</h3>
                <p className="quality-card__value">
                  {metrics.tests.passed}
                  <span>/{metrics.tests.total}</span>
                </p>
                {metrics.coverage && (
                  <p className="info-card__text">
                    {page.coverage}: {metrics.coverage.lines.toFixed(1)} %
                  </p>
                )}
              </article>
            )}
            {metrics.bundle && (
              <article className="info-card quality-card reveal" data-spotlight>
                <h3 className="info-card__title">{page.bundleTitle}</h3>
                {[
                  ["js", page.jsLabel, metrics.bundle.jsGzip],
                  ["css", page.cssLabel, metrics.bundle.cssGzip],
                ].map(([key, label, bytes]) => (
                  <div className="budget-bar" key={key}>
                    <span className="budget-bar__label">
                      {label}
                      <strong>{formatKb(bytes)}</strong>
                    </span>
                    <span className="budget-bar__track">
                      <span
                        className="budget-bar__fill"
                        style={{ width: `${Math.min(100, (bytes / (metrics.bundle.budgetKb[key] * 1024)) * 100)}%` }}
                      />
                    </span>
                    <span className="budget-bar__limit">{page.budgetOf(metrics.bundle.budgetKb[key])}</span>
                  </div>
                ))}
              </article>
            )}
          </div>
        </section>
      )}

      <section className="section container" aria-labelledby="history-title">
        <SectionHeading id="history-title" label={page.historyLabel} title={page.historyTitle} />
        <div className="history-grid">
          <div className="info-card reveal" data-spotlight>
            <RunHistory runs={pipeline?.runs ?? []} texts={page} language={language} />
          </div>
          {history.length > 0 && (
            <div className="info-card reveal" data-spotlight>
              <BundleTrend history={history} title={page.trendTitle} />
            </div>
          )}
        </div>
      </section>

      <section className="section container" aria-labelledby="how-title">
        <SectionHeading id="how-title" label={page.howLabel} title={page.howTitle} />
        <div className="how-grid">
          {page.how.map((item, index) => (
            <article className="info-card how-card reveal" data-spotlight key={item.title}>
              <span className="how-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="info-card__title">{item.title}</h3>
              <p className="info-card__text">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="how-links">
          <ExternalLink className="button button--primary" href={`https://github.com/${REPO}/actions/workflows/ci-cd.yml`}>
            <FaGithub aria-hidden="true" />
            {page.viewWorkflow}
          </ExternalLink>
          <ExternalLink className="button button--dark" href={`https://github.com/${REPO}`}>
            {page.sourceCode}
          </ExternalLink>
        </div>
      </section>
    </>
  );
}
