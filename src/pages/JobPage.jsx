import { FiArrowUpRight } from "react-icons/fi";
import { useOutletContext, useParams } from "react-router";
import { BackLink } from "../components/BackLink";
import { Bracketed } from "../components/Bracketed";
import { ExternalLink } from "../components/ExternalLink";
import { PrevNext } from "../components/PrevNext";
import { RichText } from "../components/RichText";
import { StatGrid } from "../components/StatGrid";
import { TechChips } from "../components/TechChips";
import { usePageMeta } from "../hooks/usePageMeta";
import { NotFoundPage } from "./NotFoundPage";

export function JobPage() {
  const { t } = useOutletContext();
  const { slug } = useParams();
  const index = t.jobs.findIndex((job) => job.slug === slug);
  const job = t.jobs[index];
  const page = t.pages.job;
  usePageMeta(
    job ? { title: `${job.role} · ${job.name} — Carlos Juca`, description: job.summary } : t.pages.notFound.meta,
  );

  if (!job) return <NotFoundPage />;

  return (
    <article className="detail container">
      <BackLink to="/experience">{t.ui.backToExperience}</BackLink>

      <header className="detail__header">
        <img
          className="detail__logo"
          src={job.logo}
          alt=""
          width="96"
          height="96"
          style={{ viewTransitionName: `job-${job.slug}` }}
        />
        <div className="detail__heading">
          <p className="detail__eyebrow">
            <span>
              <Bracketed>{t.pages.experience.label}</Bracketed>
            </span>
          </p>
          <h1 className="detail__title">{job.role}</h1>
          <p className="detail__subtitle">
            <ExternalLink href={job.url}>
              {job.name}
              <FiArrowUpRight aria-hidden="true" />
            </ExternalLink>
          </p>
          <p className="detail__meta">
            {job.period} · {job.location}
          </p>
        </div>
      </header>

      {job.metrics.length > 0 && (
        <section className="detail__section" aria-labelledby="impact-title">
          <h2 id="impact-title" className="detail__section-title">
            <Bracketed>{page.impactTitle}</Bracketed>
          </h2>
          <StatGrid items={job.metrics} />
        </section>
      )}

      <section className="detail__section" aria-labelledby="tasks-title">
        <h2 id="tasks-title" className="detail__section-title">
          <Bracketed>{page.tasksTitle}</Bracketed>
        </h2>
        <ul className="task-list">
          {job.tasks.map((task) => (
            <li className="reveal" key={task}>
              <RichText text={task} />
            </li>
          ))}
        </ul>
      </section>

      <section className="detail__section" aria-labelledby="stack-title">
        <h2 id="stack-title" className="detail__section-title">
          <Bracketed>{page.stackTitle}</Bracketed>
        </h2>
        <TechChips items={job.stack} className="reveal" />
      </section>

      <PrevNext items={t.jobs} index={index} basePath="/experience" ui={t.ui} />
    </article>
  );
}
