"use client";

import { useEffect } from "react";

/**
 * Les sections s'engagent — elles n'entrent pas en fondu prolongé.
 *
 * Un seul observateur pour tout le document : chaque bloc `.commit` bascule
 * une fois, puis est oublié. Mouvement réduit ou absence d'`IntersectionObserver`
 * : tout est visible d'emblée.
 */
export function PageMotion() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".commit");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-on"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-on");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
