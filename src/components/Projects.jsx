import { FiExternalLink } from "react-icons/fi";
import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";
import { TechBadge } from "./TechBadge";

export function Projects({ t, ui }) {
  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" label={t.label} title={t.title} align="center" />
      <div className="projects">
        {t.items.map((project) => (
          <article className="project reveal" key={project.image}>
            <div className="project__info">
              <p className="project__org">
                <img src={project.logo} alt="" width="28" height="28" loading="lazy" />
                {project.org}
              </p>
              <h3 className="project__name">{project.name}</h3>
              {project.role && <p className="project__role">{project.role}</p>}
              <p className="project__summary">{project.summary}</p>
              {project.tech.length > 0 && (
                <ul className="project__tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <TechBadge name={tech} variant="chip" />
                    </li>
                  ))}
                </ul>
              )}
              {project.url && (
                <ExternalLink className="button button--primary button--small" href={project.url}>
                  <FiExternalLink aria-hidden="true" />
                  {ui.viewProject}
                </ExternalLink>
              )}
            </div>
            <div className="project__media">
              <img
                src={project.image}
                alt={ui.screenshot(project.name)}
                width="960"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
