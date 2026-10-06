import { useEffect, useRef, useState } from "react";

const NUMBER = /\d+(?:[.,]\d{3})*/g;
const DURATION_MS = 1400;

const canAnimate = () =>
  "IntersectionObserver" in window && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const toNumber = (token) => Number(token.replace(/[.,]/g, ""));

// Formats `value` with the same thousands separator used in `token`.
function formatLike(token, value) {
  const separator = token.match(/[.,]/)?.[0];
  const digits = String(Math.round(value));
  return separator ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : digits;
}

// Text at a given progress (0–1): numbers count up from zero, except in
// "a → b" where b counts down from a, to show the reduction.
function frame(value, progress) {
  const tokens = value.match(NUMBER) ?? [];
  const isReduction = value.includes("→") && tokens.length === 2;
  let position = 0;
  return value.replace(NUMBER, (token) => {
    const index = position++;
    if (!isReduction) return formatLike(token, toNumber(token) * progress);
    if (index === 0) return token;
    const from = toNumber(tokens[0]);
    return formatLike(tokens[0], from + (toNumber(token) - from) * progress);
  });
}

export function CountUp({ value }) {
  const element = useRef(null);
  const [animated] = useState(canAnimate);
  const [text, setText] = useState(() => (animated ? frame(value, 0) : value));

  useEffect(() => {
    if (!animated) return undefined;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          setText(frame(value, 1 - (1 - progress) ** 3));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(element.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animated, value]);

  if (!animated) return value;

  return (
    <>
      <span ref={element} aria-hidden="true">
        {text}
      </span>
      <span className="visually-hidden">{value}</span>
    </>
  );
}
