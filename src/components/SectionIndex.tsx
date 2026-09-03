"use client";

import { useEffect, useState } from "react";

interface SectionIndexProps {
  sections: { id: string; label: string }[];
  label: string;
}

/**
 * Le rail de sections sert de navigation.
 *
 * Un trait par station, l'ambre marquant celle qu'on lit. Le libellé
 * n'apparaît qu'au survol ou au focus : au repos, le rail est une règle
 * graduée, pas un menu. Masqué sous 1024 px — la barre du haut suffit.
 */
export function SectionIndex({ sections, label }: SectionIndexProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="index" aria-label={label}>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          {...(active === s.id ? { "aria-current": "true" as const } : {})}
        >
          <span className="lab">{s.label.toUpperCase()}</span>
          <span className="tick" />
        </a>
      ))}
    </nav>
  );
}
