import { FiArrowLeft } from "react-icons/fi";
import { Link, useOutletContext } from "react-router";
import { Bracketed } from "../components/Bracketed";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  const { t } = useOutletContext();
  const page = t.pages.notFound;
  usePageMeta(page.meta);

  return (
    <section className="not-found container">
      <p className="not-found__code" aria-hidden="true">
        404
      </p>
      <p className="page-header__label">
        <Bracketed>NotFound</Bracketed>
      </p>
      <h1 className="not-found__title">{page.title}</h1>
      <p className="not-found__text">{page.text}</p>
      <Link className="button button--primary" to="/" viewTransition>
        <FiArrowLeft aria-hidden="true" />
        {page.back}
      </Link>
    </section>
  );
}
