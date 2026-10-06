import { Bracketed } from "./Bracketed";

// Header for inner pages, with a large outlined page number in the background.
export function PageHeader({ index, label, title, intro }) {
  return (
    <header className="page-header container">
      <span className="page-header__watermark" aria-hidden="true">
        {index}
      </span>
      <p className="page-header__label reveal">
        <Bracketed>{label}</Bracketed>
      </p>
      <h1 className="page-header__title reveal">{title}</h1>
      {intro && <p className="page-header__intro reveal">{intro}</p>}
    </header>
  );
}
