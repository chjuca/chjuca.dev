import { Link } from "react-router";
import { NAV_ITEMS, profile } from "../data/content";
import { Bracketed } from "./Bracketed";
import { Socials } from "./Socials";

export function Footer({ ui }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link className="footer__brand" to="/" viewTransition>
          <Bracketed>CJ</Bracketed>
        </Link>
        <nav aria-label={ui.footerNavLabel}>
          <ul className="footer__nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link to={item.to} viewTransition>
                  {ui.nav[item.id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Socials className="footer__socials" />
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name} · {ui.footer}
      </p>
    </footer>
  );
}
