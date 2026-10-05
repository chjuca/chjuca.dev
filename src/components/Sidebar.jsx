import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiDownload, FiGlobe, FiMail, FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import { profile } from "../data/content";
import { ExternalLink } from "./ExternalLink";

export function Sidebar({ t, language, sections, activeSection, theme, onToggleLanguage, onToggleTheme }) {
  const themeLabel = theme === "dark" ? t.ui.themeToLight : t.ui.themeToDark;
  const otherLanguage = language === "es" ? "en" : "es";

  return (
    <header className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__top">
          <img
            className="avatar"
            src={profile.avatar}
            alt={profile.name}
            width="112"
            height="112"
            fetchPriority="high"
          />
          <div className="sidebar__controls">
            <button
              type="button"
              className="icon-button"
              onClick={onToggleLanguage}
              aria-label={t.ui.switchLanguageLabel}
              title={t.ui.switchLanguage}
            >
              <FiGlobe aria-hidden="true" />
              <span lang={otherLanguage}>{otherLanguage.toUpperCase()}</span>
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={onToggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
          </div>
        </div>

        <h1 className="sidebar__name">{profile.name}</h1>
        <p className="sidebar__role">{profile.role}</p>
        <p className="sidebar__tagline">{t.tagline}</p>

        <ul className="sidebar__meta">
          <li>
            <FiMapPin aria-hidden="true" />
            {t.location}
          </li>
          <li>
            <FiMail aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>

        <div className="sidebar__actions">
          <a className="button button--primary" href={t.cv} download>
            <FiDownload aria-hidden="true" />
            {t.ui.downloadCv}
          </a>
          <a className="button" href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" />
            {t.ui.contact}
          </a>
        </div>

        <nav className="nav" aria-label={t.ui.sectionsLabel}>
          <ul>
            {sections.map((id) => (
              <li key={id}>
                <a
                  className="nav__link"
                  href={`#${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                >
                  {t.ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="socials">
          <li>
            <ExternalLink href={profile.github} aria-label="GitHub" title="GitHub">
              <FaGithub aria-hidden="true" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.linkedin} aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
