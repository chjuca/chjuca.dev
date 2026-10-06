import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ScrollProgress } from "../components/ScrollProgress";
import { SocialRail } from "../components/SocialRail";
import { content } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useSpotlight } from "../hooks/useSpotlight";
import { useTheme } from "../hooks/useTheme";

// Every full page load gets the key "default", so key those by path; otherwise
// opening /about after scrolling /projects in the same tab would reuse its offset.
const scrollKey = (location) => (location.key === "default" ? location.pathname : location.key);

// Shell shared by every page. Pages read the active language's texts with
// useOutletContext().
export function RootLayout() {
  const [language, setLanguage] = useLanguage();
  const [theme, toggleTheme] = useTheme();
  const { pathname } = useLocation();
  const t = content[language];
  useRevealOnScroll(`${language}:${pathname}`);
  useSpotlight();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skipToContent}
      </a>
      <ScrollProgress />
      <NavBar
        t={t}
        language={language}
        theme={theme}
        onChangeLanguage={setLanguage}
        onToggleTheme={toggleTheme}
      />
      <SocialRail />

      <main id="main" tabIndex={-1}>
        <Outlet context={{ t, language }} />
      </main>

      <Footer ui={t.ui} />
      <ScrollRestoration getKey={scrollKey} />
    </>
  );
}
