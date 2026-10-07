import { FiCheck, FiClock, FiLoader, FiMinus, FiX } from "react-icons/fi";
import { SiCloudflare, SiEslint, SiLighthouse, SiVite, SiVitest } from "react-icons/si";
import { TbGitCommit, TbHeartbeat, TbScale } from "react-icons/tb";
import { formatDuration } from "../../lib/pipeline";

const STAGE_ICONS = {
  commit: <TbGitCommit />,
  lint: <SiEslint />,
  test: <SiVitest />,
  build: <SiVite />,
  budget: <TbScale />,
  lighthouse: <SiLighthouse />,
  deploy: <SiCloudflare />,
  smoke: <TbHeartbeat />,
};

const STATE_ICONS = {
  success: <FiCheck />,
  failure: <FiX />,
  running: <FiLoader />,
  pending: <FiClock />,
  skipped: <FiMinus />,
};

// Each stage is a button: selecting it shows its details below the graph.
export function PipelineGraph({ stages, texts, selected, onSelect }) {
  return (
    <ol className="pipeline-graph" aria-label={texts.graphLabel}>
      {stages.map((stage) => (
        <li key={stage.id} className="pipeline-graph__item" data-state={stage.state}>
          <button
            type="button"
            className="stage"
            data-state={stage.state}
            aria-pressed={selected === stage.id}
            onClick={() => onSelect(stage.id)}
          >
            <span className="stage__node" aria-hidden="true">
              {STAGE_ICONS[stage.id]}
              <span className="stage__badge">{STATE_ICONS[stage.state]}</span>
            </span>
            <span className="stage__name">{texts.stages[stage.id].name}</span>
            <span className="stage__meta">
              {stage.durationMs != null ? formatDuration(stage.durationMs) : texts.states[stage.state]}
            </span>
            <span className="visually-hidden">{texts.states[stage.state]}</span>
          </button>
        </li>
      ))}
    </ol>
  );
}
