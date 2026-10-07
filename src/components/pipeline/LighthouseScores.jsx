const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const KEYS = ["performance", "accessibility", "bestPractices", "seo"];

// Same colour bands Lighthouse uses: 90+ good, 50–89 needs work, below 50 poor.
const band = (score) => (score >= 0.9 ? "good" : score >= 0.5 ? "average" : "poor");

export function LighthouseScores({ scores, labels, compact = false }) {
  return (
    <ul className={`gauges${compact ? " gauges--compact" : ""}`}>
      {KEYS.filter((key) => scores[key] != null).map((key) => {
        const score = scores[key];
        return (
          <li className="gauge" data-band={band(score)} key={key}>
            <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false">
              <circle className="gauge__track" cx="40" cy="40" r={RADIUS} />
              <circle
                className="gauge__value"
                cx="40"
                cy="40"
                r={RADIUS}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - score)}
              />
            </svg>
            <span className="gauge__score">{Math.round(score * 100)}</span>
            <span className="gauge__label">{labels[key]}</span>
          </li>
        );
      })}
    </ul>
  );
}
