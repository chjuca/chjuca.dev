import { FiArrowUpRight } from "react-icons/fi";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function Projects({ t }) {
  return (
    <Section id="projects" title={t.ui.nav.projects}>
      <div className="projects">
        {t.projects.map((project) => (
          <article className="card project" key={project.name}>
            <img
              className="project__image"
              src={project.image}
              alt={t.ui.screenshot(project.name)}
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            />
            <div className="project__body">
              <p className="project__org">
                <img src={project.logo} alt="" width="24" height="24" loading="lazy" />
                {project.org}
              </p>
              <h3 className="project__name">{project.name}</h3>
              {project.role && <p className="project__role">{project.role}</p>}
              <p className="project__summary">{project.summary}</p>
              {project.tech.length > 0 && (
                <ul className="tags tags--small">
                  {project.tech.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              {project.url && (
                <ExternalLink className="text-link" href={project.url}>
                  {t.ui.viewProject}
                  <FiArrowUpRight aria-hidden="true" />
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
