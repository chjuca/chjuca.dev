import { FiActivity, FiExternalLink } from "react-icons/fi";
import { Link, useOutletContext, useParams } from "react-router";
import { BackLink } from "../components/BackLink";
import { Bracketed } from "../components/Bracketed";
import { ExternalLink } from "../components/ExternalLink";
import { PrevNext } from "../components/PrevNext";
import { ProjectStatus } from "../components/ProjectStatus";
import { TechChips } from "../components/TechChips";
import { usePageMeta } from "../hooks/usePageMeta";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { t } = useOutletContext();
  const { slug } = useParams();
  const index = t.projects.findIndex((project) => project.slug === slug);
  const project = t.projects[index];
  const page = t.pages.project;
  usePageMeta(
    project ? { title: `${project.name} — Carlos Juca`, description: project.summary } : t.pages.notFound.meta,
  );

  if (!project) return <NotFoundPage />;
  // Paths inside this site (e.g. /pipeline) use the router instead of a new tab.
  const internal = project.url?.startsWith("/");

  return (
    <article className="detail container">
      <BackLink to="/projects">{t.ui.backToProjects}</BackLink>

      <header className="detail__header detail__header--project">
        <div className="detail__heading">
          <p className="detail__eyebrow">
            <img src={project.logo} alt="" width="28" height="28" />
            {project.org}
          </p>
          <h1 className="detail__title">{project.name}</h1>
          {project.role && <p className="detail__subtitle">{project.role}</p>}
          <p className="detail__lead">{project.summary}</p>
          {internal ? (
            <Link className="button button--primary" to={project.url} viewTransition>
              <FiActivity aria-hidden="true" />
              {t.ui.viewPipeline}
            </Link>
          ) : project.url ? (
            <ExternalLink className="button button--primary" href={project.url}>
              <FiExternalLink aria-hidden="true" />
              {t.ui.visitSite}
            </ExternalLink>
          ) : (
            <ProjectStatus project={project} ui={t.ui} />
          )}
        </div>
      </header>

      <figure className="detail__media">
        <img
          src={project.image}
          alt={t.ui.screenshot(project.name)}
          width="960"
          height="600"
          style={{ viewTransitionName: `project-${project.slug}` }}
        />
      </figure>

      <section className="detail__section facts reveal" data-spotlight aria-labelledby="facts-title">
        <h2 id="facts-title" className="detail__section-title">
          <Bracketed>{page.factsTitle}</Bracketed>
        </h2>
        <dl className="facts__list">
          <div>
            <dt>{page.orgLabel}</dt>
            <dd>{project.org}</dd>
          </div>
          {project.role && (
            <div>
              <dt>{page.roleLabel}</dt>
              <dd>{project.role}</dd>
            </div>
          )}
          <div>
            <dt>{page.statusLabel}</dt>
            <dd>
              {internal ? (
                <Link to={project.url} viewTransition>
                  chjuca.dev{project.url}
                </Link>
              ) : project.url ? (
                <ExternalLink href={project.url}>{new URL(project.url).hostname}</ExternalLink>
              ) : (
                t.ui.privateProject
              )}
            </dd>
          </div>
          <div className="facts__wide">
            <dt>{page.stackLabel}</dt>
            <dd>
              <TechChips items={project.tech} />
            </dd>
          </div>
        </dl>
      </section>

      <PrevNext items={t.projects} index={index} basePath="/projects" ui={t.ui} />
    </article>
  );
}
