import { CodeCard } from "./CodeCard";
import { SectionHeading } from "./SectionHeading";

function CodeValue({ value }) {
  if (!Array.isArray(value)) return <span className="tok-string">"{value}"</span>;
  return (
    <>
      [
      {value.map((item, index) => (
        <span key={item}>
          <span className="tok-string">"{item}"</span>
          {index < value.length - 1 ? ", " : ""}
        </span>
      ))}
      ]
    </>
  );
}

export function About({ t }) {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <SectionHeading id="about-title" label={t.label} title={t.title} />
      <div className="about">
        <div className="reveal">
          <p className="about__summary">{t.summary}</p>
          <ul className="stats">
            {t.highlights.map((highlight) => (
              <li className="stat" key={highlight.value}>
                <span className="stat__value">{highlight.value}</span>
                <span className="stat__label">{highlight.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <CodeCard file={t.codeFile} className="reveal">
          <span className="tok-keyword">const</span> <span className="tok-variable">{t.code.variable}</span> = {"{\n"}
          {t.code.fields.map(([key, value]) => (
            <span key={key}>
              {"  "}
              <span className="tok-property">{key}</span>: <CodeValue value={value} />
              {",\n"}
            </span>
          ))}
          {"};\n\n"}
          <span className="tok-keyword">export default</span> <span className="tok-variable">{t.code.variable}</span>;
        </CodeCard>
      </div>
    </section>
  );
}
