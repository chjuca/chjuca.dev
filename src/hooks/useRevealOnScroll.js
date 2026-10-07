import { useEffect } from "react";

const PENDING = ".reveal:not([data-visible])";

// Fades `.reveal` elements in the first time they enter the viewport,
// including ones rendered later (e.g. after data loads). Content stays
// visible when IntersectionObserver is missing or motion is reduced, because
// the hiding CSS only applies under html.can-reveal.
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
    const observeWithin = (root) => {
      if (root.matches?.(PENDING)) observer.observe(root);
      for (const element of root.querySelectorAll?.(PENDING) ?? []) observer.observe(element);
    };

    observeWithin(document);
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) observeWithin(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [dependency]);
}
