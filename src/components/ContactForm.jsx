import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { profile } from "../data/content";
import { CodeCard } from "./CodeCard";
import { ExternalLink } from "./ExternalLink";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export function ContactForm({ t }) {
  const [form, setForm] = useState(EMPTY);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  // No backend: compose the email in the visitor's mail app.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = form.subject || t.defaultSubject;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = (key) => (
    <>
      {"  "}
      <span className="tok-property">{t.codeFields[key]}</span>:{" "}
    </>
  );

  return (
    <div className="contact">
      <CodeCard file={t.codeFile} className="contact__preview reveal">
        <span className="tok-comment">// {t.codeComment}</span>
        {"\n"}
        <span className="tok-keyword">const</span> <span className="tok-variable">{t.codeVariable}</span> = {"{\n"}
        {field("name")}
        <span className="tok-string">"{form.name}"</span>,{"\n"}
        {field("email")}
        <span className="tok-string">"{form.email}"</span>,{"\n"}
        {field("subject")}
        <span className="tok-string">"{form.subject}"</span>,{"\n"}
        {field("message")}
        <span className="tok-string">`{form.message}`</span>
        <span className="code-caret" aria-hidden="true" />,{"\n"}
        {"};\n\n"}
        <span className="tok-function">{t.codeSend}</span>(<span className="tok-variable">{t.codeVariable}</span>,{" "}
        <span className="tok-string">"{profile.email}"</span>);
      </CodeCard>

      <form className="contact__form reveal" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="contact-name">{t.name}</label>
          <input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="contact-email">{t.email}</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={update}
          />
        </div>
        <div className="field">
          <label htmlFor="contact-subject">{t.subject}</label>
          <input id="contact-subject" name="subject" value={form.subject} onChange={update} />
        </div>
        <div className="field">
          <label htmlFor="contact-message">{t.message}</label>
          <textarea id="contact-message" name="message" rows="6" required value={form.message} onChange={update} />
        </div>
        <button type="submit" className="button button--primary contact__submit">
          <FiSend aria-hidden="true" />
          {t.send}
        </button>
        <p className="contact__hint">{t.hint}</p>
        <p className="contact__direct">
          {t.direct} <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        </p>
      </form>
    </div>
  );
}
