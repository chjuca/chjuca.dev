import { FiArrowUpRight } from "react-icons/fi";
import { formatDuration, formatKb, timeAgo } from "../../lib/pipeline";
import { ExternalLink } from "../ExternalLink";
import { LighthouseScores } from "./LighthouseScores";

// Live data for the selected stage, when the pipeline reported any.
function StageData({ id, texts, latest, metrics, repo, language }) {
  if (id === "commit" && latest) {
    return (
      <p className="stage-details__data">
        <span className="stage-details__quote">“{latest.message}”</span>
        <span className="stage-details__meta">
          <ExternalLink href={`https://github.com/${repo}/commit/${latest.sha}`}>
            <code>{latest.sha.slice(0, 7)}</code>
          </ExternalLink>{" "}
          {latest.author && `${texts.commitBy} ${latest.author} · `}
          {timeAgo(latest.startedAt, language)}
        </span>
      </p>
    );
  }

  if (id === "test" && metrics?.tests) {
    return (
      <dl className="stage-details__facts">
        <div>
          <dt>{texts.testsTitle}</dt>
          <dd>{texts.testsValue(metrics.tests.passed, metrics.tests.total)}</dd>
        </div>
        {metrics.coverage && (
          <div>
            <dt>{texts.coverage}</dt>
            <dd>{metrics.coverage.lines.toFixed(1)} %</dd>
          </div>
        )}
      </dl>
    );
  }

  if ((id === "build" || id === "budget") && metrics?.bundle) {
    const { jsGzip, cssGzip, budgetKb } = metrics.bundle;
    return (
      <dl className="stage-details__facts">
        <div>
          <dt>{texts.jsLabel}</dt>
          <dd>
            {formatKb(jsGzip)} {id === "budget" && <span className="stage-details__budget">{texts.budgetOf(budgetKb.js)}</span>}
          </dd>
        </div>
        <div>
          <dt>{texts.cssLabel}</dt>
          <dd>
            {formatKb(cssGzip)}{" "}
            {id === "budget" && <span className="stage-details__budget">{texts.budgetOf(budgetKb.css)}</span>}
          </dd>
        </div>
      </dl>
    );
  }

  if (id === "lighthouse" && metrics?.lighthouse) {
    return <LighthouseScores scores={metrics.lighthouse} labels={texts.lighthouseLabels} compact />;
  }

  if (id === "deploy") {
    return (
      <p className="stage-details__data">
        <ExternalLink href="https://chjuca.dev">
          {texts.liveSite}: chjuca.dev
          <FiArrowUpRight aria-hidden="true" />
        </ExternalLink>
      </p>
    );
  }

  return null;
}

export function StageDetails({ stage, texts, latest, metrics, repo, language }) {
  const label = texts.stages[stage.id];

  return (
    <section className="stage-details" data-state={stage.state} aria-live="polite">
      <header className="stage-details__header">
        <h2 className="stage-details__title">{label.name}</h2>
        <span className="stage-details__state">{texts.states[stage.state]}</span>
        {stage.durationMs != null && (
          <span className="stage-details__duration">
            {texts.detailsDuration}: {formatDuration(stage.durationMs)}
          </span>
        )}
      </header>
      <p className="stage-details__description">{label.description}</p>
      <StageData id={stage.id} texts={texts} latest={latest} metrics={metrics} repo={repo} language={language} />
    </section>
  );
}
