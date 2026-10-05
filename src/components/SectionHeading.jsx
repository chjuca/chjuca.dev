import { Bracketed } from "./Bracketed";

export function SectionHeading({ id, label, title, align = "start" }) {
  return (
    <header className={`section-heading section-heading--${align} reveal`}>
      <p className="section-heading__label">
        <Bracketed>{label}</Bracketed>
      </p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
    </header>
  );
}
