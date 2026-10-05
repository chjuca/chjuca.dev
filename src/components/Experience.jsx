import { FiArrowUpRight } from "react-icons/fi";
import { ExternalLink } from "./ExternalLink";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function Experience({ t }) {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" label={t.label} title={t.title} />
      <ol className="timeline">
        {t.jobs.map((job) => (
          <li className="job reveal" key={job.url + job.period}>
            <img className="job__logo" src={job.logo} alt="" width="56" height="56" loading="lazy" />
            <article className="job__card">
              <header className="job__header">
                <h3 className="job__company">
                  <ExternalLink href={job.url}>
                    {job.name}
                    <FiArrowUpRight aria-hidden="true" className="job__company-icon" />
                  </ExternalLink>
                </h3>
                <span className="job__period">{job.period}</span>
              </header>
              <p className="job__role">{job.role}</p>
              <p className="job__location">{job.location}</p>
              <ul className="job__tasks">
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
    </section>
  );
}
