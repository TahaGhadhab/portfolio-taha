"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 11;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export interface HudSection {
  id: string;
  label: string;
}

/**
 * Mini-HUD persistant : indique en permanence la section active et
 * l'avancement dans la page.
 *
 * C'est l'« objet signature qui suit le scroll » du document de changement,
 * ramené dans la métaphore : pas un objet abstrait, un instrument de bord qui
 * annonce le poste observé. Purement indicatif — la navigation reste dans la
 * barre du haut, donc la couche est `aria-hidden` pour ne pas doubler
 * l'annonce des sections auprès des lecteurs d'écran.
 */
export function StatusHud({
  sections,
  statusLabel,
}: {
  sections: HudSection[];
  statusLabel: string;
}) {
  const [active, setActive] = useState<HudSection | null>(null);
  const [progress, setProgress] = useState(0);
  const ratios = useRef(new Map<string, number>());

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        // La section la plus visible gagne ; à égalité, la première du document.
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const section of sections) {
          const ratio = ratios.current.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = section.id;
          }
        }

        setActive(bestId ? (sections.find((s) => s.id === bestId) ?? null) : null);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Rien à annoncer tant qu'on est dans le hero.
  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="no-print fixed bottom-4 left-4 z-40 flex items-center gap-2.5 rounded-[3px] border border-line bg-panel/92 py-1.5 pl-1.5 pr-3 backdrop-blur"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0">
        <circle cx="14" cy="14" r={RADIUS} fill="none" stroke="var(--color-line)" strokeWidth="2" />
        <circle
          cx="14"
          cy="14"
          r={RADIUS}
          fill="none"
          stroke="var(--color-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          transform="rotate(-90 14 14)"
          style={{ transition: "stroke-dashoffset 140ms linear" }}
        />
        <circle cx="14" cy="14" r="2.5" fill="var(--color-amber)" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          {statusLabel}
        </span>
        <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink">
          {active.label}
        </span>
      </span>
    </div>
  );
}
