import { FiGlobe, FiLock } from "react-icons/fi";

// Tells at a glance whether a project can be visited or is private.
export function ProjectStatus({ project, ui }) {
  return project.url ? (
    <span className="project-badge project-badge--public">
      <FiGlobe aria-hidden="true" />
      {ui.publicProject}
    </span>
  ) : (
    <span className="project-badge project-badge--private">
      <FiLock aria-hidden="true" />
      {ui.privateProject}
    </span>
  );
}
