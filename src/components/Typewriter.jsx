import { useEffect, useState } from "react";

const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// Types each phrase, pauses, deletes it and moves on to the next one.
// Screen readers get the full list once instead of the animation.
export function Typewriter({ phrases }) {
  const [animate] = useState(() => !prefersReducedMotion());
  const [state, setState] = useState({ index: 0, length: 0, deleting: false });

  useEffect(() => {
    if (!animate) return undefined;

    const phrase = phrases[state.index];
    let delay = state.deleting ? 35 : 75;
    let next = { ...state, length: state.length + (state.deleting ? -1 : 1) };

    if (!state.deleting && state.length === phrase.length) {
      delay = 1800;
      next = { ...state, deleting: true };
    } else if (state.deleting && state.length === 0) {
      delay = 300;
      next = { index: (state.index + 1) % phrases.length, length: 0, deleting: false };
    }

    const timer = setTimeout(() => setState(next), delay);
    return () => clearTimeout(timer);
  }, [animate, phrases, state]);

  return (
    <>
      <span className="typewriter" aria-hidden="true">
        {animate ? phrases[state.index].slice(0, state.length) : phrases.join(" · ")}
        {animate && <span className="typewriter__caret" />}
      </span>
      <span className="visually-hidden">{phrases.join(", ")}</span>
    </>
  );
}
