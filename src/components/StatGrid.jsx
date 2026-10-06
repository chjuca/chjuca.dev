import { CountUp } from "./CountUp";

export function StatGrid({ items }) {
  return (
    <ul className="stats">
      {items.map((item) => (
        <li className="stat reveal" data-spotlight key={item.value}>
          <span className="stat__value">
            <CountUp key={item.value} value={item.value} />
          </span>
          <span className="stat__label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
