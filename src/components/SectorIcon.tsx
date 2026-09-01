import type { Sector } from "@/content";

/**
 * Icône de secteur d'une station. Purement décorative : le secteur est toujours
 * écrit en toutes lettres à côté, donc `aria-hidden`.
 */
export function SectorIcon({ sector, className = "" }: { sector: Sector; className?: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (sector) {
    // Aéronautique : silhouette d'aile en plan
    case "aero":
      return (
        <svg {...common}>
          <path d="M12 2.5c.9 0 1.5 1.1 1.5 2.6v3.6l7.5 4.3v2l-7.5-2.2v3.9l2.4 1.8v1.6L12 19.2l-3.9 1-.0-1.6 2.4-1.8v-3.9L3 15.1v-2l7.5-4.3V5.1c0-1.5.6-2.6 1.5-2.6Z" />
        </svg>
      );
    // Pétrolier : chevalet de pompage schématique
    case "oil":
      return (
        <svg {...common}>
          <path d="M3 20.5h18" />
          <path d="M7 20.5V9.5l10-4v4" />
          <path d="M17 9.5v11" />
          <path d="M5 13.5h4" />
          <circle cx="17" cy="9.5" r="1.6" />
        </svg>
      );
    // Finance : courbe et axes
    case "finance":
      return (
        <svg {...common}>
          <path d="M3.5 3.5v17h17" />
          <path d="M7 15.5l3.5-4 3 2.5L20 7" />
          <path d="M20 11V7h-4" />
        </svg>
      );
  }
}
