import { Bracketed } from "./Bracketed";
import { SectionHeading } from "./SectionHeading";
import { TechBadge } from "./TechBadge";

export function Skills({ t }) {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" label={t.label} title={t.title} />
      <div className="skills">
        {t.groups.map((group) => (
          <article className="skill-card reveal" key={group.id}>
            <h3 className="skill-card__title">
              <Bracketed>{group.id}</Bracketed>
            </h3>
            <ul className="skill-card__tiles">
              {group.items.map((item) => (
                <li key={item}>
                  <TechBadge name={item} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
