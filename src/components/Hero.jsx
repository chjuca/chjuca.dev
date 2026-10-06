import { FiDownload, FiMail } from "react-icons/fi";
import { Link } from "react-router";
import { profile } from "../data/content";
import { Socials } from "./Socials";
import { Typewriter } from "./Typewriter";

export function Hero({ t, ui, cv }) {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__blob hero__blob--warm" />
        <span className="hero__blob hero__blob--cool" />
        <span className="hero__blob hero__blob--deep" />
        <span className="hero__grid" />
      </div>

      <div className="hero__avatar-wrap reveal">
        <img
          className="hero__avatar"
          src={profile.avatar}
          alt={profile.name}
          width="260"
          height="260"
          fetchPriority="high"
        />
      </div>
      <h1 id="home-title" className="hero__title reveal">
        {t.greeting}{" "}
        <span className="hero__wave" aria-hidden="true">
          👋
        </span>
      </h1>
      <p className="hero__role reveal">{profile.role}</p>
      <p className="hero__focus reveal">
        <span className="bracket" aria-hidden="true">
          &gt;
        </span>{" "}
        <Typewriter key={t.greeting} phrases={t.focus} />
      </p>
      <p className="hero__intro reveal">{t.intro}</p>
      <div className="hero__actions reveal">
        <Link className="button button--primary" to="/contact" viewTransition>
          <FiMail aria-hidden="true" />
          {t.contact}
        </Link>
        <a className="button button--dark" href={cv} download>
          <FiDownload aria-hidden="true" />
          {ui.downloadCv}
        </a>
      </div>
      <Socials className="hero__socials reveal" />
      <a className="scroll-hint" href="#highlights" aria-label={ui.scrollDown}>
        <span className="scroll-hint__wheel" />
      </a>
    </section>
  );
}
