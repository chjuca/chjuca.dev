import { FiMoon, FiSun } from "react-icons/fi";
import { profile } from "../data/content";
import { Socials } from "./Socials";

// Desktop-only decorative rails (social links on the left, email on the
// right) plus the floating theme toggle, which is visible on every screen.
export function SideRails({ t, theme, onToggleTheme }) {
  const themeLabel = theme === "dark" ? t.ui.themeToLight : t.ui.themeToDark;

  return (
    <>
      <div className="rail rail--left">
        <Socials className="rail__socials" />
      </div>
      <div className="rail rail--right">
        <a className="rail__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={themeLabel}
        title={themeLabel}
      >
        {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>
    </>
  );
}
