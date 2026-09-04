"use client";

import { useEffect } from "react";

/**
 * Les sections s'engagent — elles n'entrent pas en fondu prolongé.
 *
 * Un seul observateur pour tout le document : chaque bloc `.commit` bascule
 * une fois, puis est oublié. Mouvement réduit ou absence d'`IntersectionObserver`
 * : tout est visible d'emblée.
 *
 * Le même composant tient la seconde moitié du contrat : la position du
 * pointeur au-dessus d'une fiche de terrain. Un écouteur unique posé sur le
 * document, plutôt qu'un par fiche — le coût ne dépend pas du nombre de
 * fiches, et rien n'écoute quand le pointeur est ailleurs.
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

  /* La tache de lumière sous le curseur.
     Deux variables sur la fiche survolée, écrites au plus une fois par
     image ; la feuille de style place le dégradé. Rien n'est lu sur le
     DOM en dehors du `getBoundingClientRect` de la fiche courante, et il
     n'est demandé qu'une fois par déplacement — jamais dans une boucle. */
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* Un pointeur grossier n'a pas de survol : sur un écran tactile, la
       tache s'allumerait sous le doigt au moment du défilement. */
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    let sheet: HTMLElement | null = null;
    let cx = 0;
    let cy = 0;

    const paint = () => {
      raf = 0;
      if (!sheet) return;
      const r = sheet.getBoundingClientRect();
      sheet.style.setProperty("--mx", `${cx - r.left}px`);
      sheet.style.setProperty("--my", `${cy - r.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest<HTMLElement>(".sheet") ?? null;
      if (target !== sheet) {
        /* La fiche quittée reprend son centre : si on y revient par le
           clavier, la tache n'est pas restée coincée dans un coin. */
        sheet?.style.removeProperty("--mx");
        sheet?.style.removeProperty("--my");
        sheet = target;
      }
      if (!sheet) return;
      cx = e.clientX;
      cy = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    addEventListener("pointermove", onMove, { passive: true });
    return () => {
      removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
