import { Section } from "./Section";

export function About({ t }) {
  return (
    <Section id="about" title={t.ui.nav.about}>
      <p className="lead">{t.summary}</p>
      <ul className="stats">
        {t.highlights.map((highlight) => (
          <li className="stat" key={highlight.value}>
            <span className="stat__value">{highlight.value}</span>
            <span className="stat__label">{highlight.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
