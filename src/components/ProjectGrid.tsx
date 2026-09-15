"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { Content, Project, TrackId } from "@/content";
import { TRACKS } from "@/content";

/**
 * Le sommaire des projets.
 *
 * Avant cette grille, savoir que le projet 04 existait demandait de faire
 * défiler sept cents mots. Une planche de cinq tuiles répond à la seule
 * question qu'on se pose en arrivant : qu'est-ce qu'il y a là-dedans, et
 * lequel je vais lire.
 *
 * Elle ne résume rien — les fiches sont juste en dessous et n'ont pas bougé.
 * Elle donne l'inventaire, l'état, le chiffre, et l'accès.
 *
 * Le filtre reprend les trois disques de la figure « triple casquette » plutôt
 * que d'inventer des étiquettes : la section « À propos » affirme que les trois
 * domaines se recouvrent, la grille le fait vérifier.
 */

/** Le relief d'une tuile, en degrés, au plus loin du centre. */
const TILT = 5;

interface ProjectGridProps {
  projects: Content["projects"];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [track, setTrack] = useState<TrackId | null>(null);

  /* Un domaine qui ne porte aucun projet n'a pas de bouton : un filtre qui
     promet un ensemble vide est un filtre qui ment. */
  const offered = useMemo(
    () => TRACKS.filter((t) => projects.items.some((p) => p.tracks.includes(t))),
    [projects.items],
  );

  const shown = useMemo(
    () => projects.items.filter((p) => !track || p.tracks.includes(track)),
    [projects.items, track],
  );

  return (
    <div className="pindex commit">
      <div className="pfilter" role="group" aria-label={projects.grid.filterLabel}>
        <div className="pfilter-chips">
          <FilterChip
            label={projects.grid.allLabel}
            on={track === null}
            onSelect={() => setTrack(null)}
          />
          {offered.map((t) => (
            <FilterChip
              key={t}
              label={projects.tracks[t]}
              on={track === t}
              onSelect={() => setTrack(track === t ? null : t)}
            />
          ))}
        </div>

        {/* Le compte se met à jour tout seul ; il est annoncé parce qu'un
            filtre qui retire trois tuiles sans rien dire laisse croire à
            une panne. */}
        <p className="pfilter-count mono" aria-live="polite">
          {projects.grid.countLabel.replace("{n}", String(shown.length))}
        </p>
      </div>

      {shown.length ? (
        <ul className="pgrid" aria-label={projects.grid.label}>
          {shown.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              no={projects.items.indexOf(p) + 1}
              projects={projects}
            />
          ))}
        </ul>
      ) : (
        <p className="pgrid-empty mono">{projects.grid.emptyLabel}</p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  on,
  onSelect,
}: {
  label: string;
  on: boolean;
  onSelect: () => void;
}) {
  return (
    <button type="button" className="pchip" aria-pressed={on} onClick={onSelect}>
      <span className="pchip-tick" aria-hidden="true" />
      {label.toUpperCase()}
    </button>
  );
}

/**
 * Une tuile.
 *
 * Elle s'incline vers le pointeur — une vraie rotation dans l'espace, pas une
 * ombre qui grossit. Le numéro et l'état sont poussés en avant du plan de la
 * carte, si bien que le relief se voit au décalage entre les couches et pas
 * seulement au contour.
 *
 * Deux variables écrites au plus une fois par image, et rien n'est lu sur le
 * DOM en dehors du `getBoundingClientRect` de la tuile survolée. Sur un
 * pointeur grossier ou en mouvement réduit, aucun écouteur n'est posé : la
 * tuile reste plate, et c'est très bien.
 */
function ProjectCard({
  project,
  no,
  projects,
}: {
  project: Project;
  no: number;
  projects: Content["projects"];
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const raf = useRef(0);

  const onMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { clientX, clientY } = e;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const r = el.getBoundingClientRect();
      /* −1 à 1 sur chaque axe, mesuré depuis le centre de la tuile. */
      const nx = (clientX - r.left) / r.width - 0.5;
      const ny = (clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${-ny * TILT * 2}`);
      el.style.setProperty("--ry", `${nx * TILT * 2}`);
      el.style.setProperty("--gx", `${(nx + 0.5) * 100}%`);
      el.style.setProperty("--gy", `${(ny + 0.5) * 100}%`);
    });
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (raf.current) {
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    }
    /* La tuile reprend son plan. On retire les variables plutôt que de les
       remettre à zéro : la feuille de style redevient seule maîtresse. */
    for (const v of ["--rx", "--ry", "--gx", "--gy"]) el.style.removeProperty(v);
  }, []);

  return (
    <li className="pgrid-cell">
      <a
        ref={ref}
        className="pcard"
        href={`#projet-${project.id}`}
        aria-label={projects.grid.openLabel.replace("{name}", project.name)}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onBlur={onLeave}
      >
        {/* Le reflet : une tache qui suit le pointeur sur la face de la
            tuile. Purement décorative, donc retirée de l'arbre. */}
        <span className="pcard-sheen" aria-hidden="true" />

        <span className="pcard-top">
          <span className="pcard-no mono">{String(no).padStart(2, "0")}</span>
          <StatusChip tone={project.statusTone} label={project.status} />
        </span>

        <span className="pcard-body">
          <span className="pcard-name">{project.name}</span>
          <span className="pcard-tag">{project.tagline}</span>
        </span>

        <span className="pcard-foot">
          {project.metric ? (
            <span className="pcard-metric">
              <span className="v">{project.metric.value}</span>
              <span className="k mono">{project.metric.label.toUpperCase()}</span>
            </span>
          ) : null}
          <span className="pcard-tracks">
            {project.tracks.map((t) => (
              <span className="pcard-track mono" key={t}>
                {projects.tracks[t].toUpperCase()}
              </span>
            ))}
          </span>
        </span>
      </a>
    </li>
  );
}

/**
 * L'état, en pastille.
 *
 * Un voyant et un mot. « Livré » était jusqu'ici du texte gris posé à côté
 * d'une période — il se lisait comme une date, pas comme un résultat.
 */
export function StatusChip({
  tone,
  label,
}: {
  tone: Project["statusTone"];
  label: string;
}) {
  return (
    <span className={`status status-${tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {label.toUpperCase()}
    </span>
  );
}
