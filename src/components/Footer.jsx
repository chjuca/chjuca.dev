import { profile } from "../data/content";
import { Socials } from "./Socials";

export function Footer({ text }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {text}
        </p>
        <Socials className="footer__socials" />
      </div>
    </footer>
  );
}
