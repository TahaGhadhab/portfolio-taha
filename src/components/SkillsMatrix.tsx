"use client";

import { useState } from "react";
import type { Content, Deployment, SkillGroup } from "@/content";

interface Crossing {
  skill: string;
  deployment: string;
  active: boolean;
}

interface SkillsMatrixProps {
  skills: Content["skills"];
  deployments: Deployment[];
}

/**
 * Matrice d'incidence compétences × terrains.
 *
 * Remplace les cadrans chiffrés : un pourcentage auto-attribué n'est
 * pas vérifiable, un croisement l'est. La forme est empruntée à la matrice
 * d'incidence de la méthode de King — celle-là même qu'utilise le projet
 * d'implantation d'atelier de Taha.
 *
 * Rendu comme un vrai `<table>` : un lecteur d'écran annonce « Python,
 * Safran » en parcourant les cellules, sans dépendre du survol. Le
 * réticule de croisement n'est qu'une aide visuelle par-dessus.
 */
export function SkillsMatrix({ skills, deployments }: SkillsMatrixProps) {
  const [row, setRow] = useState<string | null>(null);
  const [col, setCol] = useState<string | null>(null);
  const [readout, setReadout] = useState<Crossing | null>(null);

  const clear = () => {
    setRow(null);
    setCol(null);
    setReadout(null);
  };

  const track = (skill: string, deployment: Deployment, active: boolean) => {
    setRow(skill);
    setCol(deployment.id);
    setReadout({ skill, deployment: deployment.short, active });
  };

  return (
    <div>
      {/* Bandeau d'instrument */}
      <div className="flex items-center gap-2 rounded-t-[3px] border border-line bg-panel px-4 py-2.5">
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-cyan" />
        <span className="label-instrument">{skills.matrix.deploymentsLabel}</span>
        <span className="ml-auto hidden font-mono text-[10px] text-muted sm:inline">
          {skills.matrix.legend}
        </span>
      </div>

      <div className="overflow-x-auto border-x border-b border-line" onMouseLeave={clear}>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            {skills.matrix.legend}
          </caption>

          <thead>
            <tr>
              {/* Coin vide, au-dessus de la colonne des compétences */}
              <th
                scope="col"
                className="sticky left-0 z-10 min-w-[180px] bg-base-2 px-4 pb-3 pt-4 align-bottom sm:min-w-[220px]"
              >
                <span className="sr-only">{skills.title}</span>
              </th>

              {deployments.map((deployment) => (
                <th
                  key={deployment.id}
                  scope="col"
                  onMouseEnter={() => setCol(deployment.id)}
                  className="px-0 pb-3 pt-4 align-bottom transition-colors"
                >
                  <span
                    title={deployment.full}
                    className={`mx-auto block h-[104px] w-[26px] font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                      col === deployment.id ? "text-ink" : "text-muted"
                    }`}
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {deployment.short}
                  </span>
                </th>
              ))}

              <th scope="col" className="px-4 pb-3 pt-4 align-bottom">
                <span className="label-instrument">{skills.matrix.countLabel}</span>
              </th>
            </tr>
          </thead>

          {skills.groups.map((group) => (
            <MatrixGroup
              key={group.id}
              group={group}
              deployments={deployments}
              row={row}
              col={col}
              onTrack={track}
              onRow={setRow}
              cellLabel={skills.matrix.cellLabel}
            />
          ))}
        </table>
      </div>

      {/* Readout : ce que pointe le réticule, comme un afficheur d'instrument */}
      <div className="flex min-h-[42px] items-center gap-2.5 rounded-b-[3px] border-x border-b border-line bg-panel px-4 py-3">
        {readout ? (
          <>
            <span
              aria-hidden="true"
              className={`size-1.5 shrink-0 rounded-full ${readout.active ? "bg-ok" : "bg-line"}`}
            />
            <p className="truncate font-mono text-[11px] text-ink">
              {readout.skill}
              <span className="mx-1.5 text-muted" aria-hidden="true">
                ×
              </span>
              {readout.deployment}
              {!readout.active ? <span className="ml-2 text-muted">—</span> : null}
            </p>
          </>
        ) : (
          <p className="font-mono text-[11px] text-muted">{skills.matrix.emptyHint}</p>
        )}
      </div>
    </div>
  );
}

function MatrixGroup({
  group,
  deployments,
  row,
  col,
  onTrack,
  onRow,
  cellLabel,
}: {
  group: SkillGroup;
  deployments: Deployment[];
  row: string | null;
  col: string | null;
  onTrack: (skill: string, deployment: Deployment, active: boolean) => void;
  onRow: (skill: string) => void;
  cellLabel: string;
}) {
  const accent = group.accent === "amber" ? "var(--color-amber)" : "var(--color-cyan)";

  return (
    <tbody>
      {/* Intertitre de sous-système */}
      <tr>
        <th
          scope="colgroup"
          colSpan={deployments.length + 2}
          className="sticky left-0 border-t border-line bg-base-2 px-4 pb-2 pt-6 text-left"
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span className="label-instrument !text-ink">{group.domain}</span>
          </span>
        </th>
      </tr>

      {group.skills.map((skill) => {
        const used = new Set(skill.usedIn);
        const isRow = row === skill.name;

        return (
          <tr
            key={skill.name}
            onMouseEnter={() => onRow(skill.name)}
            className={`transition-colors ${isRow ? "bg-panel/70" : ""}`}
          >
            <th
              scope="row"
              className={`sticky left-0 z-10 border-t border-line px-4 py-2.5 text-left font-normal transition-colors ${
                isRow ? "bg-panel" : "bg-base-2"
              }`}
            >
              <span className="block text-sm leading-snug text-ink">{skill.name}</span>
              {skill.note ? (
                <span className="mt-0.5 block font-mono text-[10px] leading-relaxed text-muted">
                  {skill.note}
                </span>
              ) : null}
            </th>

            {deployments.map((deployment) => {
              const active = used.has(deployment.id);
              const isCol = col === deployment.id;
              const crossed = isRow || isCol;

              return (
                <td
                  key={deployment.id}
                  onMouseEnter={() => onTrack(skill.name, deployment, active)}
                  className={`border-t border-line px-0 py-2.5 text-center transition-colors ${
                    isCol ? "bg-panel/70" : ""
                  }`}
                >
                  {active ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="mx-auto block size-[13px] rounded-[2px] transition-all duration-200"
                        style={{
                          backgroundColor: accent,
                          opacity: crossed || (!row && !col) ? 1 : 0.42,
                          boxShadow: crossed
                            ? `0 0 0 3px color-mix(in srgb, ${accent} 22%, transparent)`
                            : "none",
                        }}
                      />
                      <span className="sr-only">
                        {cellLabel
                          .replace("{skill}", skill.name)
                          .replace("{deployment}", deployment.short)}
                      </span>
                    </>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="mx-auto block size-[3px] rounded-full bg-line"
                    />
                  )}
                </td>
              );
            })}

            <td
              className={`border-t border-line px-4 py-2.5 text-right transition-colors ${
                isRow ? "bg-panel/70" : ""
              }`}
            >
              <span
                className="font-mono text-sm font-bold"
                style={{ color: skill.usedIn.length ? accent : "var(--color-muted)" }}
              >
                {skill.usedIn.length}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
