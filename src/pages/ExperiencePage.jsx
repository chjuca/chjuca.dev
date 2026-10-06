import { FiDownload } from "react-icons/fi";
import { useOutletContext } from "react-router";
import { PageHeader } from "../components/PageHeader";
import { Timeline } from "../components/Timeline";
import { usePageMeta } from "../hooks/usePageMeta";

export function ExperiencePage() {
  const { t } = useOutletContext();
  const page = t.pages.experience;
  usePageMeta(page.meta);

  return (
    <>
      <PageHeader index="01" label={page.label} title={page.title} intro={page.intro} />
      <section className="section section--tight container" aria-label={page.title}>
        <Timeline jobs={t.jobs} ui={t.ui} />
        <div className="page-actions">
          <a className="button button--dark" href={t.cv} download>
            <FiDownload aria-hidden="true" />
            {t.ui.downloadCv}
          </a>
        </div>
      </section>
    </>
  );
}
