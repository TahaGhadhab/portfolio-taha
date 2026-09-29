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
    const selector = ".commit, .pgrid-cell, .method-step, .step, .group, .cert";
    const items = new Set<HTMLElement>();
    const paths = new Set<SVGGeometryElement>();
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const reveal = (el: HTMLElement) => {
      el.classList.remove("is-pending");
      el.removeAttribute("data-motion-pending");
      el.classList.add("is-on");
    };
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".commit").forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let rank = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (!el.classList.contains("commit")) {
            el.style.setProperty("--motion-delay", `calc(${Math.min(rank++, 3)} * var(--stagger))`);
          }
          reveal(el);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -24px 0px", threshold: 0 },
    );

    const register = () => {
      for (const el of items) {
        if (!el.isConnected) {
          observer.unobserve(el);
          items.delete(el);
        }
      }
      document.querySelectorAll<SVGGeometryElement>(
        ".plate .diag-edge, .plate .diag-return, .why .diag-wake, .why .diag-wake-calm",
      ).forEach((path) => {
        if (paths.has(path)) return;
        paths.add(path);
        path.style.setProperty("--stroke-length", String(path.getTotalLength()));
        path.classList.add("motion-stroke");
      });
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (items.has(el)) return;
        items.add(el);
        if (media.matches) {
          reveal(el);
          return;
        }
        if (el.classList.contains("commit")) {
          // Preserve the existing no-JavaScript and first-viewport visibility.
          if (el.getBoundingClientRect().top < innerHeight && el.getClientRects().length) {
            reveal(el);
            return;
          }
          el.classList.add("is-pending");
        } else {
          el.setAttribute("data-motion-item", "");
          el.setAttribute("data-motion-pending", "");
        }
        observer.observe(el);
      });
    };
    register();
    // Project filters replace cards; each new card gets its own entrance.
    const mutations = new MutationObserver(register);
    mutations.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });
    const revealAll = () => {
      if (!media.matches) return;
      observer.disconnect();
      items.forEach(reveal);
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const el of items) {
        if (!el.contains(event.target)) continue;
        reveal(el);
        observer.unobserve(el);
      }
    };
    media.addEventListener("change", revealAll);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      media.removeEventListener("change", revealAll);
      document.removeEventListener("focusin", onFocus);
      items.forEach((el) => {
        reveal(el);
        el.removeAttribute("data-motion-item");
        el.style.removeProperty("--motion-delay");
      });
      paths.forEach((path) => {
        path.classList.remove("motion-stroke");
        path.style.removeProperty("--stroke-length");
      });
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
