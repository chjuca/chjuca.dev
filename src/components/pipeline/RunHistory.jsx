import { FiCheck, FiLoader, FiSlash, FiX } from "react-icons/fi";
import { durationMs, formatDuration, runState, timeAgo } from "../../lib/pipeline";
import { ExternalLink } from "../ExternalLink";

const ICONS = { success: <FiCheck />, failure: <FiX />, running: <FiLoader />, cancelled: <FiSlash /> };

export function RunHistory({ runs, texts, language }) {
  if (runs.length === 0) return <p className="run-history__empty">{texts.historyEmpty}</p>;

  return (
    <ol className="run-history">
      {runs.map((run) => {
        const state = runState(run);
        return (
          <li className="run" data-state={state} key={run.id}>
            <span className="run__icon" aria-hidden="true">
              {ICONS[state]}
            </span>
            <span className="visually-hidden">{texts.status[state]}</span>
            <span className="run__main">
              <ExternalLink className="run__message" href={run.url}>
                {run.message}
              </ExternalLink>
              <span className="run__meta">
                #{run.number} · <code>{run.sha.slice(0, 7)}</code> · {timeAgo(run.startedAt, language)}
              </span>
            </span>
            <span className="run__duration">
              {state === "running" ? texts.states.running : formatDuration(durationMs(run.startedAt, run.updatedAt))}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
