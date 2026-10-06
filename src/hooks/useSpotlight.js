import { useEffect } from "react";

// Feeds the pointer position to [data-spotlight] cards so CSS can draw a glow
// that follows the cursor. Skipped on touch screens.
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia?.("(pointer: fine)").matches) return undefined;

    const onPointerMove = (event) => {
      const card = event.target.closest?.("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, []);
}
