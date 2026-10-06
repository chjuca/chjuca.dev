import { FiMail } from "react-icons/fi";
import { Link } from "react-router";

// Faint code texture behind the call to action; purely decorative.
const CODE = `async function deploy(service) {
  await runTests(service);
  const image = await build(service, { cache: true });
  await rollout(image, { strategy: "canary", zeroDowntime: true });
  return monitor(service, ["latency", "errors", "saturation"]);
}

export const routes = await precompute(graph, {
  maxLatencyMs: 900,
  cacheTtl: "1h",
});

const agent = createAgent({ tools: [search, geocode, notify] });
await agent.run("Optimize today's delivery routes");`;

export function CtaBand({ cta }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <pre className="cta-band__code" aria-hidden="true">
        {CODE}
      </pre>
      <div className="cta-band__content reveal">
        <h2 id="cta-title" className="cta-band__title">
          {cta.title}
        </h2>
        <p className="cta-band__text">{cta.text}</p>
        <Link className="button button--primary" to="/contact" viewTransition>
          <FiMail aria-hidden="true" />
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
