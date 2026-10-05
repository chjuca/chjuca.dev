import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/content";
import { Socials } from "./Socials";

export function Hero({ t, cv, scrollLabel }) {
  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <img
        className="hero__avatar reveal"
        src={profile.avatar}
        alt={profile.name}
        width="260"
        height="260"
        fetchPriority="high"
      />
      <h1 id="home-title" className="hero__title reveal">
        {t.greeting}{" "}
        <span className="hero__wave" aria-hidden="true">
          👋
        </span>
      </h1>
      <p className="hero__role reveal">{profile.role}</p>
      <p className="hero__intro reveal">{t.intro}</p>
      <div className="hero__actions reveal">
        <a className="button button--primary" href="#contact">
          <FiMail aria-hidden="true" />
          {t.contact}
        </a>
        <a className="button button--dark" href={cv} download>
          <FiDownload aria-hidden="true" />
          {t.downloadCv}
        </a>
      </div>
      <Socials className="hero__socials reveal" />
      <a className="scroll-hint" href="#experience" aria-label={scrollLabel}>
        <span className="scroll-hint__wheel" />
      </a>
    </section>
  );
}
