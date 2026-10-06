import { useOutletContext } from "react-router";
import { Marquee } from "../components/Marquee";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { profile } from "../data/content";
import { usePageMeta } from "../hooks/usePageMeta";

export function ProjectsPage() {
  const { t } = useOutletContext();
  const page = t.pages.projects;
  usePageMeta(page.meta);

  return (
    <>
      <PageHeader index="02" label={page.label} title={page.title} intro={page.intro} />
      <section className="section section--tight container" aria-label={page.title}>
        <div className="project-list">
          {t.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} ui={t.ui} variant="feature" headingLevel={2} />
          ))}
        </div>
      </section>
      <Marquee label={t.ui.moreOnGitHub} href={profile.github} />
    </>
  );
}
