"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/lib/activeSection";

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
 *
 * La station courante vient du relevé commun : le rail et la barre du haut
 * lisent la même réponse, et ne peuvent pas se contredire.
 */
export function SectionIndex({ sections, label }: SectionIndexProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);

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
