import fs from "node:fs";
import path from "node:path";

/** Formats acceptes, par ordre de preference. */
const CANDIDATES = [
  "flightdeck.webp",
  "flightdeck.avif",
  "flightdeck.jpg",
  "flightdeck.jpeg",
  "flightdeck.png",
];

/**
 * Photo de poste de pilotage a placer au plan le plus profond du decor.
 *
 * Optionnelle : sans fichier, le decor vectoriel se suffit a lui-meme. Avec
 * fichier, la photo est desaturee et fortement assombrie pour rester un fond
 * — le texte doit garder son contraste AA par-dessus.
 *
 * Resolu au build (composant serveur uniquement).
 */
export function resolveCockpitPhoto(): string | undefined {
  for (const file of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", "cockpit", file))) {
      return `/cockpit/${file}`;
    }
  }
  return undefined;
}
