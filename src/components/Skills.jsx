import { FiActivity, FiCloud, FiCpu, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import { Section } from "./Section";

const ICONS = {
  backend: <FiServer aria-hidden="true" />,
  frontend: <FiLayout aria-hidden="true" />,
  ai: <FiCpu aria-hidden="true" />,
  databases: <FiDatabase aria-hidden="true" />,
  cloud: <FiCloud aria-hidden="true" />,
  practices: <FiActivity aria-hidden="true" />,
};

export function Skills({ t }) {
  return (
    <Section id="skills" title={t.ui.nav.skills}>
      <div className="skills">
        {t.skills.map((group) => (
          <article className="card skill-group" key={group.id}>
            <h3 className="skill-group__title">
              {ICONS[group.id]}
              {group.title}
            </h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
