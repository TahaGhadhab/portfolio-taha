"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Glyphes de brouillage — chiffres et capitales, esprit terminal. */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>*#";

const DURATION = 260;
const FRAME = 34;

/**
 * Effet « décodage système » : au survol, le libellé se recompose de gauche à
 * droite comme un terminal qui charge, puis se fige.
 *
 * Contraintes du design system : ~260 ms, jamais en boucle, jamais scintillant,
 * et totalement inerte sous `prefers-reduced-motion`. Le texte final est rendu
 * dès le serveur et n'est jamais remplacé dans l'arbre d'accessibilité : le
 * brouillage passe par une couche visuelle doublée d'un `aria-hidden`, si bien
 * qu'un lecteur d'écran n'entend que le mot réel.
 */
export function DecodeText({ text, className = "" }: { text: string; className?: string }) {
  const [scrambled, setScrambled] = useState<string | null>(null);
  const frame = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (frame.current) {
      clearInterval(frame.current);
      frame.current = null;
    }
    setScrambled(null);
  }, []);

  const start = useCallback(() => {
    if (frame.current) return;

    const reduced =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const started = Date.now();
    frame.current = setInterval(() => {
      const ratio = Math.min(1, (Date.now() - started) / DURATION);
      const settled = Math.floor(ratio * text.length);

      if (ratio >= 1) {
        stop();
        return;
      }

      setScrambled(
        text
          .split("")
          .map((char, i) => {
            if (i < settled || char === " ") return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
    }, FRAME);
  }, [text, stop]);

  useEffect(() => stop, [stop]);

  return (
    <span className={`relative inline-block ${className}`} onMouseEnter={start} onMouseLeave={stop}>
      {/* Source d'accessibilité : jamais brouillée */}
      <span className={scrambled ? "invisible" : undefined}>{text}</span>
      {scrambled ? (
        <span aria-hidden="true" className="absolute inset-0">
          {scrambled}
        </span>
      ) : null}
    </span>
  );
}
