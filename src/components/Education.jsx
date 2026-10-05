import { Section } from "./Section";

export function Education({ t }) {
  return (
    <Section id="education" title={t.ui.nav.education}>
      <ul className="education">
        {t.education.map((item) => (
          <li className="card education__item" key={item.degree}>
            <img className="logo" src={item.logo} alt="" width="44" height="44" loading="lazy" />
            <div>
              <h3 className="education__degree">{item.degree}</h3>
              <p className="education__school">{item.school}</p>
            </div>
            <span className="education__period">{item.period}</span>
          </li>
        ))}
      </ul>

      <h3 className="subheading">{t.ui.languagesTitle}</h3>
      <ul className="tags">
        {t.languages.map((language) => (
          <li className="tag" key={language}>
            {language}
          </li>
        ))}
      </ul>
    </Section>
  );
}
