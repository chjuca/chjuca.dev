import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { ProjectStatus } from "./ProjectStatus";
import { TechChips } from "./TechChips";

// The whole card links to the project page; the screenshot morphs into the
// detail page's hero image through a shared view-transition name.
export function ProjectCard({ project, ui, variant = "compact", headingLevel = 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className={`project-card project-card--${variant} reveal`} data-spotlight>
      <div className="project-card__media">
        <img
          src={project.image}
          alt={ui.screenshot(project.name)}
          width="960"
          height="600"
          loading="lazy"
          decoding="async"
          style={{ viewTransitionName: `project-${project.slug}` }}
        />
      </div>
      <div className="project-card__body">
        <p className="project-card__org">
          <img src={project.logo} alt="" width="28" height="28" loading="lazy" />
          {project.org}
        </p>
        <Heading className="project-card__name">
          <Link className="stretched-link" to={`/projects/${project.slug}`} viewTransition>
            {project.name}
          </Link>
        </Heading>
        {project.role && <p className="project-card__role">{project.role}</p>}
        <p className="project-card__summary">{project.summary}</p>
        <TechChips items={project.tech} />
        <div className="project-card__footer">
          <ProjectStatus project={project} ui={ui} />
          <span className="card-more" aria-hidden="true">
            {ui.viewDetails}
            <FiArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
}
