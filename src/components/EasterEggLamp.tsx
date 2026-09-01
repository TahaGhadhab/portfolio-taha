"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Content } from "@/content";

/**
 * Voyant auxiliaire du tableau de bord. Discret par construction : il ne porte
 * aucune information de recrutement, uniquement la part personnelle. Reste
 * atteignable au clavier et correctement étiqueté malgré son côté caché.
 */
export function EasterEggLamp({ egg }: { egg: Content["easterEgg"] }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lampRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    lampRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        ref={lampRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={egg.lampLabel}
        title={egg.lampLabel}
        className="no-print group fixed bottom-4 right-4 z-40 flex size-9 items-center justify-center rounded-full border border-line bg-panel/90 backdrop-blur transition-colors hover:border-amber"
      >
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-amber transition-transform group-hover:scale-125"
          style={{ animation: "pulse-lamp 3.6s ease-in-out infinite" }}
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[85] flex items-end justify-center bg-base/85 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="egg-title"
            onClick={(e) => e.stopPropagation()}
            className="panel w-full max-w-md p-6 sm:p-7"
          >
            <p className="flex items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-amber" />
              <span className="label-instrument">{egg.lampLabel}</span>
            </p>

            <h2
              id="egg-title"
              className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-ink"
            >
              {egg.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{egg.body}</p>

            <button ref={closeRef} type="button" onClick={close} className="push-button mt-7 px-4 py-2.5">
              {egg.close}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
