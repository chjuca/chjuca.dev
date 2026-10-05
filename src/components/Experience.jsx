import { FiArrowUpRight } from "react-icons/fi";
import { ExternalLink } from "./ExternalLink";
import { RichText } from "./RichText";
import { Section } from "./Section";

export function Experience({ t }) {
  return (
    <Section id="experience" title={t.ui.nav.experience}>
      <ol className="timeline">
        {t.experience.map((job) => (
          <li className="timeline__item" key={`${job.name}-${job.period}`}>
            <img className="timeline__logo" src={job.logo} alt="" width="44" height="44" loading="lazy" />
            <article className="card timeline__body">
              <header className="timeline__header">
                <h3 className="timeline__company">
                  <ExternalLink href={job.url}>
                    {job.name}
                    <FiArrowUpRight aria-hidden="true" className="icon-inline" />
                  </ExternalLink>
                </h3>
                <span className="timeline__period">{job.period}</span>
              </header>
              <p className="timeline__role">{job.role}</p>
              <p className="timeline__location">{job.location}</p>
              <ul className="timeline__tasks">
                {job.tasks.map((task) => (
                  <li key={task}>
                    <RichText text={task} />
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
