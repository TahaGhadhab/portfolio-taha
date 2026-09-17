/**
 * Adresse publique du site. Les balises canoniques, `hreflang` et l'image de
 * partage exigent une URL absolue : un chemin relatif est rejeté par les
 * robots et par l'inspecteur de LinkedIn.
 *
 * `NEXT_PUBLIC_SITE_URL` prend le relais le jour où un domaine propre remplace
 * l'adresse Vercel.
 */
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-taha-neon.vercel.app",
);
