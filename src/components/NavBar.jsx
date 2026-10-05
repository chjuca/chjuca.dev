import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SECTIONS } from "../data/content";
import { Bracketed } from "./Bracketed";

export function NavBar({ t, language, activeSection, onToggleLanguage }) {
  const [open, setOpen] = useState(false);

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
        <a className="navbar__brand" href="#home" onClick={() => setOpen(false)}>
          <Bracketed>CJ</Bracketed>
        </a>

        <ul id="nav-links" className="navbar__links">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                className="navbar__link"
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <Bracketed>{t.ui.nav[id]}</Bracketed>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lang-switch"
          data-lang={language}
          onClick={onToggleLanguage}
          aria-label={t.ui.switchLanguageLabel}
          title={t.ui.switchLanguageLabel}
        >
          <span className="lang-switch__label" aria-hidden="true">
            {language.toUpperCase()}
          </span>
          <span className="lang-switch__knob" aria-hidden="true" />
        </button>

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
