"use client";

import { useEffect, useRef } from "react";

const SWEEP = 240; // amplitude totale du cadran, en degrés
const START = -SWEEP / 2; // -120° = bas-gauche
const CX = 60;
const CY = 58;
const R = 42;

/** 0° pointe vers le haut. */
function polar(deg: number, radius: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function angleFor(value: number) {
  return START + (Math.min(100, Math.max(0, value)) / 100) * SWEEP;
}

const from = polar(START, R);
const to = polar(START + SWEEP, R);
const ARC = `M ${from.x.toFixed(2)} ${from.y.toFixed(2)} A ${R} ${R} 0 1 1 ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;

const TICKS = Array.from({ length: 11 }, (_, i) => START + (i / 10) * SWEEP);

interface GaugeProps {
  label: string;
  value: number;
  accent: "amber" | "cyan";
  note?: string;
  delay?: number;
}

/**
 * Cadran analogique à aiguille. L'aiguille part du zéro et rejoint sa valeur
 * une seule fois, à l'apparition — pas de boucle, pas de relance au re-scroll.
 * La valeur est aussi écrite en clair : le cadran illustre, il ne porte pas
 * seul l'information.
 */
export function Gauge({ label, value, accent, note, delay = 0 }: GaugeProps) {
  const ref = useRef<SVGSVGElement>(null);
  const needleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const node = ref.current;
    const needle = needleRef.current;
    if (!node || !needle) return;

    const target = angleFor(value);
    const arm = () => {
      needle.style.transform = `rotate(${target}deg)`;
    };

    const reduced =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouvement réduit : l'aiguille prend sa position sans transition.
    if (reduced || typeof IntersectionObserver === "undefined") {
      needle.style.transition = "none";
      arm();
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timer = setTimeout(arm, delay);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay, value]);

  const color = accent === "amber" ? "var(--color-amber)" : "var(--color-cyan)";

  return (
    <figure className="flex flex-col items-center text-center">
      <svg
        ref={ref}
        viewBox="0 0 120 92"
        className="w-full max-w-[130px]"
        role="img"
        aria-label={`${label} : ${value} sur 100`}
      >
        {/* Piste du cadran */}
        <path d={ARC} fill="none" stroke="var(--color-line)" strokeWidth="1.5" />

        {/* Graduations fines en gris */}
        {TICKS.map((deg, i) => {
          const outer = polar(deg, R - 3);
          const inner = polar(deg, i % 5 === 0 ? R - 11 : R - 7);
          return (
            <line
              key={deg}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="var(--color-line)"
              strokeWidth={i % 5 === 0 ? 1.4 : 0.9}
              strokeLinecap="round"
            />
          );
        })}

        {/* Aiguille — part du zéro, rejoint sa valeur une seule fois */}
        <g
          ref={needleRef}
          style={{
            transform: `rotate(${START}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: "transform 950ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY - (R - 9)}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <circle cx={CX} cy={CY} r="3.2" fill="var(--color-base)" stroke={color} strokeWidth="1.5" />

        {/* Valeur en mono, au centre bas */}
        <text
          x={CX}
          y={86}
          textAnchor="middle"
          fill={color}
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          {value}
        </text>
      </svg>

      <figcaption className="mt-1.5">
        <span className="block text-sm font-medium leading-snug text-ink">{label}</span>
        {note ? (
          <span className="mt-1 block font-mono text-[10px] leading-relaxed text-muted">
            {note}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
