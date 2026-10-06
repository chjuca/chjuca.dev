import { Bracketed } from "./Bracketed";
import { TechBadge } from "./TechBadge";

// One row per area: label on the left, logo tiles on the right.
export function StackList({ groups }) {
  return (
    <div className="stack reveal" data-spotlight>
      {groups.map((group) => (
        <div className="stack__row" key={group.id}>
          <h3 className="stack__label">
            <Bracketed>{group.id}</Bracketed>
          </h3>
          <ul className="stack__tiles">
            {group.items.map((item) => (
              <li key={item}>
                <TechBadge name={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
