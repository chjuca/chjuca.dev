// Decorative circuit-like line that links one section to the next.
const PATHS = {
  right: "M 30 0 V 45 H 70 V 100",
  left: "M 70 0 V 45 H 30 V 100",
  center: "M 50 0 V 100",
};

export function Connector({ variant = "right" }) {
  return (
    <div className="connector reveal" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
        <path d={PATHS[variant]} vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
