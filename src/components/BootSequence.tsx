"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Content } from "@/content";

/** Cadence : 4 lignes × 260 ms + palier = ~1,4 s. Plafond dur à 2 s. */
const LINE_INTERVAL = 260;
const HOLD_AFTER_LAST = 340;
const FADE_MS = 260;
const SESSION_KEY = "tg:boot-seen";

/**
 * Décision figée une fois pour toutes : `getSnapshot` doit être pur et stable,
 * sinon React reboucle indéfiniment.
 */
let decision: boolean | null = null;

function shouldPlayBoot(): boolean {
  if (decision !== null) return decision;

  let reduced = false;
  let seen = false;
  try {
    reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    /* matchMedia indisponible : on joue le boot. */
  }
  try {
    seen = sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    /* Stockage refusé (navigation privée) : on joue le boot, sans mémoriser. */
  }

  decision = !reduced && !seen;
  return decision;
}

/** Ni le serveur ni un rendu sans JS n'affichent l'overlay. */
const neverChanges = () => () => {};

interface BootSequenceProps {
  boot: Content["boot"];
}

/**
 * Séquence d'ouverture façon système embarqué.
 *
 * Contraintes tenues : 1 à 2 secondes maximum, skippable au clic ou à Entrée,
 * jouée une seule fois par session, entièrement contournée si l'utilisateur a
 * demandé la réduction des animations. Le contenu de la page est toujours
 * présent dans le DOM derrière l'overlay — rien n'attend le boot pour exister.
 */
export function BootSequence({ boot }: BootSequenceProps) {
  // `false` côté serveur : l'overlay n'existe jamais dans le HTML livré, donc
  // aucun contenu n'est masqué pour un robot d'indexation ou un client sans JS.
  const allowed = useSyncExternalStore(neverChanges, shouldPlayBoot, () => false);

  const [dismissed, setDismissed] = useState(false);
  const [closing, setClosing] = useState(false);
  const [shown, setShown] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const visible = allowed && !dismissed;

  const dismiss = useCallback(() => {
    setClosing(true);
    const t = setTimeout(() => setDismissed(true), FADE_MS);
    timers.current.push(t);
  }, []);

  useEffect(() => {
    if (!allowed) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignoré */
    }

    const local = timers.current;
    boot.lines.forEach((_, i) => {
      local.push(setTimeout(() => setShown(i + 1), (i + 1) * LINE_INTERVAL));
    });
    local.push(
      setTimeout(dismiss, boot.lines.length * LINE_INTERVAL + HOLD_AFTER_LAST),
    );

    return () => {
      local.forEach(clearTimeout);
      local.length = 0;
    };
  }, [allowed, boot.lines, dismiss]);

  // Verrouille le défilement uniquement le temps de l'overlay.
  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape" || e.key === " ") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={boot.skip}
      onClick={dismiss}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") dismiss();
      }}
      className="fixed inset-0 z-[90] flex cursor-pointer items-center justify-center bg-base px-6 transition-opacity"
      style={{
        opacity: closing ? 0 : 1,
        transitionDuration: `${FADE_MS}ms`,
      }}
    >
      <div className="grid-blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative w-full max-w-md">
        <p className="sr-only" role="status">
          {boot.srAnnounce}
        </p>

        <ul aria-hidden="true" className="space-y-2 font-mono text-xs sm:text-sm">
          {boot.lines.map((line, i) => (
            <li
              key={line}
              className="flex items-baseline gap-2 transition-opacity duration-150"
              style={{ opacity: i < shown ? 1 : 0 }}
            >
              <span className="text-cyan-dim">&gt;</span>
              <span className="text-muted">{line}</span>
            </li>
          ))}
        </ul>

        <p
          aria-hidden="true"
          className="mt-6 font-mono text-xs tracking-[0.2em] text-amber transition-opacity duration-200"
          style={{ opacity: shown >= boot.lines.length ? 1 : 0 }}
        >
          {boot.ready}
        </p>

        <p className="label-instrument mt-8 opacity-60">{boot.skip}</p>
      </div>
    </div>
  );
}
