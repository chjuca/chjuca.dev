const WIDTH = 320;
const HEIGHT = 80;
const PADDING = 6;

// Sparkline of the gzipped JavaScript size of each deploy.
export function BundleTrend({ history, title }) {
  const points = history.filter((entry) => entry.jsGzip != null);
  if (points.length === 0) return null;

  const values = points.map((entry) => entry.jsGzip / 1024);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const x = (index) => (points.length === 1 ? WIDTH / 2 : PADDING + (index * (WIDTH - PADDING * 2)) / (points.length - 1));
  const y = (value) => HEIGHT - PADDING - ((value - min) / range) * (HEIGHT - PADDING * 2);
  const line = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const last = values.at(-1);

  return (
    <figure className="trend">
      <figcaption className="trend__title">
        {title}
        <span className="trend__value">{last.toFixed(1)} KB</span>
      </figcaption>
      <svg className="trend__chart" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`${title}: ${values.map((value) => value.toFixed(1)).join(", ")} KB`}>
        <polygon className="trend__area" points={`${x(0)},${HEIGHT} ${line} ${x(values.length - 1)},${HEIGHT}`} />
        <polyline className="trend__line" points={line} />
        {values.map((value, index) => (
          <circle key={points[index].sha} className="trend__dot" cx={x(index)} cy={y(value)} r="3">
            <title>{`${points[index].sha}: ${value.toFixed(1)} KB`}</title>
          </circle>
        ))}
      </svg>
    </figure>
  );
}
