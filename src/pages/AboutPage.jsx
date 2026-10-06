import { FiDownload } from "react-icons/fi";
import { useOutletContext } from "react-router";
import { CodeCard } from "../components/CodeCard";
import { PageHeader } from "../components/PageHeader";
import { SectionHeading } from "../components/SectionHeading";
import { StackList } from "../components/StackList";
import { usePageMeta } from "../hooks/usePageMeta";

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

export function AboutPage() {
  const { t } = useOutletContext();
  const page = t.pages.about;
  usePageMeta(page.meta);

  return (
    <>
      <PageHeader index="03" label={page.label} title={page.title} />

      <section className="section section--tight container" aria-label={page.title}>
        <div className="about">
          <p className="about__summary reveal">{page.summary}</p>
          <CodeCard file={page.codeFile} className="reveal">
            <span className="tok-keyword">const</span> <span className="tok-variable">{page.code.variable}</span> ={" "}
            {"{\n"}
            {page.code.fields.map(([key, value]) => (
              <span key={key}>
                {"  "}
                <span className="tok-property">{key}</span>: <CodeValue value={value} />
                {",\n"}
              </span>
            ))}
            {"};\n\n"}
            <span className="tok-keyword">export default</span> <span className="tok-variable">{page.code.variable}</span>;
          </CodeCard>
        </div>
      </section>

      <section className="section container" aria-labelledby="about-stack-title">
        <SectionHeading id="about-stack-title" label={page.stackLabel} title={page.stackTitle} />
        <StackList groups={t.skills} />
      </section>

      <section className="section container" aria-labelledby="education-title">
        <SectionHeading id="education-title" label={page.educationLabel} title={page.educationTitle} />
        <div className="about-grid">
          {t.education.map((item) => (
            <article className="info-card education-card reveal" data-spotlight key={item.degree}>
              <img src={item.logo} alt="" width="56" height="56" loading="lazy" />
              <div>
                <h3 className="info-card__title">{item.degree}</h3>
                <p className="info-card__text">{item.school}</p>
                <p className="info-card__meta">{item.period}</p>
              </div>
            </article>
          ))}
          <article className="info-card reveal" data-spotlight>
            <h3 className="info-card__title">{page.languagesTitle}</h3>
            <ul className="tags">
              {t.languages.map((language) => (
                <li className="tag" key={language}>
                  {language}
                </li>
              ))}
            </ul>
          </article>
          <article className="info-card reveal" data-spotlight>
            <h3 className="info-card__title">{page.cvTitle}</h3>
            <p className="info-card__text">{page.cvText}</p>
            <div className="info-card__actions">
              <a className="button button--primary button--small" href="/cv/Carlos-Juca-Fullstack-ES.pdf" download>
                <FiDownload aria-hidden="true" />
                {page.cvEs}
              </a>
              <a className="button button--dark button--small" href="/cv/Carlos-Juca-Fullstack-EN.pdf" download>
                <FiDownload aria-hidden="true" />
                {page.cvEn}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
