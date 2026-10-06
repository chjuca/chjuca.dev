import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

// Links to the neighbouring items of a list (jobs or projects).
export function PrevNext({ items, index, basePath, ui }) {
  const previous = items[index - 1];
  const next = items[index + 1];

  return (
    <nav className="prev-next" aria-label={ui.pagerLabel}>
      {previous ? (
        <Link className="prev-next__link" to={`${basePath}/${previous.slug}`} viewTransition>
          <span className="prev-next__direction">
            <FiArrowLeft aria-hidden="true" />
            {ui.previous}
          </span>
          <span className="prev-next__name">{previous.name}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link className="prev-next__link prev-next__link--next" to={`${basePath}/${next.slug}`} viewTransition>
          <span className="prev-next__direction">
            {ui.next}
            <FiArrowRight aria-hidden="true" />
          </span>
          <span className="prev-next__name">{next.name}</span>
        </Link>
      )}
    </nav>
  );
}
