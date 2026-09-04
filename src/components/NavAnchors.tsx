"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/lib/activeSection";

interface NavAnchorsProps {
  /** Les ancres affichées dans la barre : les sections principales. */
  anchors: { id: string; label: string }[];
  /** Toutes les sections du document — le relevé doit les voir toutes. */
  sections: { id: string }[];
}

/**
 * Les ancres de la barre du haut.
 *
 * Elles ne se contentent pas de mener quelque part : celle de la section qu'on
 * lit s'allume. Sur un document d'une seule page, c'est la barre qui remplace
 * le fil d'Ariane — sans cette marque, elle ne dit que « où aller », jamais
 * « où vous êtes ».
 *
 * Le relevé observe toutes les sections, pas seulement celles qui figurent
 * ici : lorsqu'on lit une section absente de la barre, aucune ancre ne
 * s'allume, ce qui est la réponse juste — mieux qu'une marque restée sur la
 * précédente.
 */
export function NavAnchors({ anchors, sections }: NavAnchorsProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);

  return (
    <>
      {anchors.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          {...(active === s.id ? { "aria-current": "true" as const } : {})}
        >
          {s.label.toUpperCase()}
        </a>
      ))}
    </>
  );
}
