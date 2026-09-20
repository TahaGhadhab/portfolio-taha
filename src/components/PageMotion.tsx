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
    const portfolio = document.querySelector(".portfolio");
    portfolio?.setAttribute("data-enhanced", "true");
    const openDossier = (hash: string, focus: boolean) => {
      if (!hash.startsWith("#projet-") && !hash.startsWith("#poste-")) return;
      const target = document.getElementById(hash.slice(1));
      if (!(target instanceof HTMLDetailsElement)) return;
      target.open = true;
      target.classList.remove("is-pending");
      target.classList.add("is-on");
      target.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      if (focus) target.querySelector("summary")?.focus({ preventScroll: true });
    };
    const onHash = () => openDossier(location.hash, false);
    const onToggle = (event: Event) => {
      const dossier = event.target;
      if (!(dossier instanceof HTMLDetailsElement) || dossier.open || !dossier.id.startsWith("projet-")) return;
      if (document.activeElement !== dossier.querySelector("summary")) return;
      const card = document.querySelector<HTMLAnchorElement>(`a.pcard[href="#${dossier.id}"]`);
      card?.focus({ preventScroll: true });
      card?.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      history.replaceState(null, "", "#projets");
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#projet-'], a[href^='#poste-']");
      if (!link) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, "", link.hash);
      openDossier(link.hash, true);
    };
    onHash();
    addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
      portfolio?.removeAttribute("data-enhanced");
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".commit");
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = media.matches;

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-on"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("is-pending");
          entry.target.classList.add("is-on");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -24px 0px", threshold: 0 },
    );

    items.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) {
        el.classList.add("is-on");
      } else {
        el.classList.add("is-pending");
        observer.observe(el);
      }
    });
    const revealAll = () => {
      if (!media.matches) return;
      observer.disconnect();
      items.forEach((el) => {
        el.classList.remove("is-pending");
        el.classList.add("is-on");
      });
    };
    media.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", revealAll);
      items.forEach((el) => el.classList.remove("is-pending"));
    };
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
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
