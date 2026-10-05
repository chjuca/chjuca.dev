import { useEffect } from "react";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { GitHubRepos } from "./components/GitHubRepos";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";
import { content, profile } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

const SECTIONS = ["about", "experience", "skills", "education", "projects", "github"];

export default function App() {
  const [language, setLanguage] = useLanguage();
  const [theme, toggleTheme] = useTheme();
  const activeSection = useActiveSection(SECTIONS);
  const t = content[language];

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <>
      <a className="skip-link" href="#content">
        {t.ui.skipToContent}
      </a>
      <div className="layout">
        <Sidebar
          t={t}
          language={language}
          sections={SECTIONS}
          activeSection={activeSection}
          theme={theme}
          onToggleLanguage={() => setLanguage(language === "es" ? "en" : "es")}
          onToggleTheme={toggleTheme}
        />
        <main id="content" className="content" tabIndex={-1}>
          <About t={t} />
          <Experience t={t} />
          <Skills t={t} />
          <Education t={t} />
          <Projects t={t} />
          <GitHubRepos t={t} />
          <footer className="footer">
            © {new Date().getFullYear()} {profile.name} · {t.ui.footer}
          </footer>
        </main>
      </div>
    </>
  );
}
