import { useOutletContext } from "react-router";
import { ContactForm } from "../components/ContactForm";
import { PageHeader } from "../components/PageHeader";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  const { t } = useOutletContext();
  const page = t.pages.contact;
  usePageMeta(page.meta);

  return (
    <>
      <PageHeader index="04" label={page.label} title={page.title} />
      <section className="section section--tight container" aria-label={page.label}>
        <ContactForm t={page.form} />
      </section>
    </>
  );
}
