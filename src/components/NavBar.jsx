import { useEffect, useState } from "react";
import { FiGlobe, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { LANGUAGE_NAMES, LANGUAGES, NAV_ITEMS } from "../data/content";
import { Bracketed } from "./Bracketed";

export function NavBar({ t, language, theme, onChangeLanguage, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const themeLabel = theme === "dark" ? t.ui.themeToLight : t.ui.themeToDark;

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="navbar">
      <nav className={`navbar__pill${open ? " is-open" : ""}`} aria-label={t.ui.navLabel}>
        <Link className="navbar__brand" to="/" viewTransition onClick={() => setOpen(false)}>
          <Bracketed>CJ</Bracketed>
        </Link>

        <ul id="nav-links" className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                className="navbar__link"
                to={item.to}
                end={item.to === "/"}
                viewTransition
                onClick={() => setOpen(false)}
              >
                <Bracketed>{t.ui.nav[item.id]}</Bracketed>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__controls">
          <div className="lang-toggle" role="group" aria-label={t.ui.languageLabel}>
            <FiGlobe className="lang-toggle__icon" aria-hidden="true" />
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                className="lang-toggle__option"
                lang={code}
                aria-pressed={language === code}
                aria-label={LANGUAGE_NAMES[code]}
                title={LANGUAGE_NAMES[code]}
                onClick={() => onChangeLanguage(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

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

        <button
          type="button"
          className="navbar__menu-button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
