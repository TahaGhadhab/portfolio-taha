"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Content, Project } from "@/content";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";

/**
 * Mur d'écrans de supervision. Chaque moniteur porte déjà l'essentiel —
 * nom, période, résumé, chiffre clé — de sorte que l'ouverture en plein cadre
 * n'ajoute que du détail : rien de critique n'est enfermé derrière le clic.
 */
export function ProjectWall({ projects }: { projects: Content["projects"] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const active = projects.items.find((p) => p.id === openId) ?? null;

  const close = useCallback(() => {
    setOpenId(null);
    lastFocused.current?.focus();
    lastFocused.current = null;
  }, []);

  const open = (id: string) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setOpenId(id);
  };

  useEffect(() => {
    if (!active) return;

    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, close]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={i * 90} className="h-full">
              <article className="panel flex h-full flex-col">
                {/* Bandeau de moniteur */}
                <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-ok"
                    style={{ animation: "pulse-lamp 3.2s ease-in-out infinite" }}
                  />
                  <span className="label-instrument">{project.status}</span>
                  <span className="ml-auto font-mono text-[10px] text-muted">
                    {project.period}
                  </span>
                </div>

                <ProjectVisual kind={project.visual} />

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-cyan">{project.tagline}</p>

                  {/* Un projet en ligne est un argument fort : visible sans ouvrir la fiche */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] text-amber underline-offset-4 hover:underline"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-amber"
                        style={{ animation: "pulse-lamp 2.4s ease-in-out infinite" }}
                      />
                      {new URL(project.url).host}
                    </a>
                  ) : null}

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  {project.metric ? (
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="font-mono text-2xl font-bold leading-none text-amber">
                        {project.metric.value}
                      </p>
                      <p className="label-instrument mt-1.5">{project.metric.label}</p>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => open(project.id)}
                    aria-haspopup="dialog"
                    className="push-button mt-5 w-full px-4 py-2.5"
                  >
                    {projects.openLabel}
                  </button>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      {active ? (
        <ProjectDialog
          project={active}
          labels={projects}
          onClose={close}
          closeRef={closeRef}
        />
      ) : null}
    </>
  );
}

function ProjectDialog({
  project,
  labels,
  onClose,
  closeRef,
}: {
  project: Project;
  labels: Content["projects"];
  onClose: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-base/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}-title`}
        onClick={(e) => e.stopPropagation()}
        className="panel max-h-[88vh] w-full max-w-2xl overflow-y-auto"
      >
        <div className="sticky top-0 flex items-center gap-3 border-b border-line bg-panel px-5 py-3">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-ok" />
          <span className="label-instrument">{project.status}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="push-button ml-auto px-3 py-1.5"
          >
            {labels.closeLabel}
          </button>
        </div>

        <ProjectVisual kind={project.visual} />

        <div className="p-5 sm:p-7">
          <p className="font-mono text-xs text-muted">{project.period}</p>
          <h3
            id={`project-${project.id}-title`}
            className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {project.name}
          </h3>
          <p className="mt-2 text-cyan">{project.tagline}</p>

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="push-button push-button--primary mt-5 inline-flex items-center gap-2 px-4 py-2.5"
            >
              {new URL(project.url).host}
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3h7v7M13 3 4 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : null}

          <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-amber" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-line pt-5">
            <p className="label-instrument">{labels.stackLabel}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
