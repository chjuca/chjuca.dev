import { useEffect } from "react";

// Fades `.reveal` elements in the first time they enter the viewport. Content
// stays visible when IntersectionObserver is missing or motion is reduced,
// because the hiding CSS only applies under html.can-reveal.
export function useRevealOnScroll(dependency) {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) return undefined;

    document.documentElement.classList.add("can-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const element of document.querySelectorAll(".reveal:not([data-visible])")) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, [dependency]);
}
