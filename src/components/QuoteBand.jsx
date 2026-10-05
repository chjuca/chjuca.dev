// Faint code texture behind the quote; purely decorative.
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

export function QuoteBand({ quote }) {
  return (
    <figure className="quote-band">
      <pre className="quote-band__code" aria-hidden="true">
        {CODE}
      </pre>
      <blockquote className="quote-band__text reveal">
        <p>“{quote.text}”</p>
      </blockquote>
      <figcaption className="quote-band__author reveal">{quote.author}</figcaption>
    </figure>
  );
}
