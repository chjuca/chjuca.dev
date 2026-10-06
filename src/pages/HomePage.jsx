import { FiArrowRight } from "react-icons/fi";
import { Link, useOutletContext } from "react-router";
import { Connector } from "../components/Connector";
import { CtaBand } from "../components/CtaBand";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { StackList } from "../components/StackList";
import { StatGrid } from "../components/StatGrid";
import { TechChips } from "../components/TechChips";
import { usePageMeta } from "../hooks/usePageMeta";

function SectionLink({ to, center = false, children }) {
  return (
    <div className={`section-link-row${center ? " section-link-row--center" : ""}`}>
      <Link className="section-link" to={to} viewTransition>
        {children}
        <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}

function CurrentJob({ job, ui }) {
  return (
    <article className="now-card reveal" data-spotlight>
      <img
        className="now-card__logo"
        src={job.logo}
        alt=""
        width="72"
        height="72"
        style={{ viewTransitionName: `job-${job.slug}` }}
      />
      <div className="now-card__body">
        <p className="now-card__meta">
          {job.period} · {job.location}
        </p>
        <h3 className="now-card__title">
          <Link className="stretched-link" to={`/experience/${job.slug}`} viewTransition>
            {job.role} · {job.name}
          </Link>
        </h3>
        <p className="now-card__summary">{job.summary}</p>
        <TechChips items={job.stack.slice(0, 8)} />
        <span className="card-more" aria-hidden="true">
          {ui.viewDetails}
          <FiArrowRight />
        </span>
      </div>
    </article>
  );
}

export function HomePage() {
  const { t } = useOutletContext();
  const home = t.pages.home;
  usePageMeta(home.meta);

  return (
    <>
      <Hero t={home.hero} ui={t.ui} cv={t.cv} />

      <section id="highlights" className="section container" aria-labelledby="highlights-title">
        <SectionHeading id="highlights-title" label={home.highlightsLabel} title={home.highlightsTitle} />
        <StatGrid items={home.highlights} />
      </section>

      <Connector variant="right" />

      <section className="section container" aria-labelledby="now-title">
        <SectionHeading id="now-title" label={home.nowLabel} title={home.nowTitle} />
        <CurrentJob job={t.jobs[0]} ui={t.ui} />
        <SectionLink to="/experience">{home.allExperience}</SectionLink>
      </section>

      <section className="section container" aria-labelledby="stack-title">
        <SectionHeading id="stack-title" label={home.stackLabel} title={home.stackTitle} />
        <StackList groups={t.skills} />
        <SectionLink to="/about">{home.stackLink}</SectionLink>
      </section>

      <Connector variant="center" />

      <section className="section container" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" label={home.projectsLabel} title={home.projectsTitle} align="center" />
        <div className="project-grid">
          {t.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} ui={t.ui} />
          ))}
        </div>
        <SectionLink to="/projects" center>
          {home.projectsLink}
        </SectionLink>
      </section>

      <CtaBand cta={home.cta} />
    </>
  );
}
