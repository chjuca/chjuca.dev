import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// Big quote whose words light up one by one as it scrolls through the viewport.
export function RevealQuote({ quote }) {
  const figure = useRef(null);
  const words = `“${quote.text}”`.split(" ");
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const element = figure.current;
      if (!element) return;
      const viewport = window.innerHeight;
      const top = element.getBoundingClientRect().top;
      const value = (viewport * 0.85 - top) / (viewport * 0.55);
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const litWords = Math.round(progress * words.length);

  return (
    <figure ref={figure} className="reveal-quote">
      <blockquote className="reveal-quote__text">
        <p>
          {words.map((word, index) => (
            <span key={index} className={index < litWords ? "is-lit" : undefined}>
              {word}
              {index < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </blockquote>
      <figcaption className="reveal-quote__author">— {quote.author}</figcaption>
    </figure>
  );
}
