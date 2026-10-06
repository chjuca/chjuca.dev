import { TechBadge } from "./TechBadge";

export function TechChips({ items, className = "" }) {
  return (
    <ul className={`chips ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <TechBadge name={item} variant="chip" />
        </li>
      ))}
    </ul>
  );
}
