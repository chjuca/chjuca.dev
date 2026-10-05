import { useEffect } from "react";
import { About } from "./components/About";
import { Connector } from "./components/Connector";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { QuoteBand } from "./components/QuoteBand";
import { RevealQuote } from "./components/RevealQuote";
import { ScrollProgress } from "./components/ScrollProgress";
import { SideRails } from "./components/SideRails";
import { Skills } from "./components/Skills";
import { content, profile, SECTIONS } from "./data/content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useLanguage } from "./hooks/useLanguage";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [language, setLanguage] = useLanguage();
  const [theme, toggleTheme] = useTheme();
  const activeSection = useActiveSection(SECTIONS);
  const t = content[language];
  useRevealOnScroll(language);

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [t]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skipToContent}
      </a>
      <ScrollProgress />
      <NavBar
        t={t}
        language={language}
        activeSection={activeSection}
        onToggleLanguage={() => setLanguage(language === "es" ? "en" : "es")}
      />
      <SideRails t={t} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main" tabIndex={-1}>
        <Hero t={t.hero} cv={t.cv} scrollLabel={t.ui.scrollDown} />
        <QuoteBand quote={t.quotes.band} />
        <Experience t={t.experience} />
        <Connector variant="right" />
        <Skills t={t.skills} />
        <RevealQuote quote={t.quotes.reveal} />
        <Projects t={t.projects} ui={t.ui} />
        <Marquee label={t.ui.moreOnGitHub} href={profile.github} />
        <About t={t.about} />
        <Connector variant="left" />
        <Contact t={t.contact} />
      </main>

      <Footer text={t.ui.footer} />
    </>
  );
}
