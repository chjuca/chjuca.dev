import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

// Experience overview: each card links to the job's detail page, and the
// company logo morphs into the detail header through a view transition.
export function Timeline({ jobs, ui }) {
  return (
    <ol className="timeline">
      {jobs.map((job, index) => (
        <li className="job reveal" key={job.slug}>
          <img
            className="job__logo"
            src={job.logo}
            alt=""
            width="56"
            height="56"
            style={{ viewTransitionName: `job-${job.slug}` }}
          />
          <article className="job__card" data-spotlight>
            <span className="job__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <header className="job__header">
              <h2 className="job__company">
                <Link className="stretched-link" to={`/experience/${job.slug}`} viewTransition>
                  {job.name}
                </Link>
              </h2>
              <span className="job__period">{job.period}</span>
            </header>
            <p className="job__role">{job.role}</p>
            <p className="job__location">{job.location}</p>
            <p className="job__summary">{job.summary}</p>
            <span className="card-more" aria-hidden="true">
              {ui.viewDetails}
              <FiArrowRight />
            </span>
          </article>
        </li>
      ))}
    </ol>
  );
}
