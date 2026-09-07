import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, Literata, IBM_Plex_Mono } from "next/font/google";
import { BrandMark } from "@/components/BrandMark";
import { Optics } from "@/components/Optics";
import "./globals.css";

/**
 * 404 global. Le layout racine vit sous un segment dynamique (`[lang]`), donc
 * aucune langue ne peut être déduite ici : la page est bilingue par défaut et
 * renvoie vers les deux entrées. Elle contourne le rendu normal, d'où l'import
 * explicite des styles et des polices.
 */
const display = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const body = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 · Taha Ghadhab",
  description: "Page introuvable / Page not found.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Optics />
        <div
          className="wrap shell"
          style={{
            minHeight: "100dvh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <BrandMark className="brand-mark" />
            <p className="mono" style={{ marginTop: "var(--s-5)" }}>
              SIGNAL PERDU / SIGNAL LOST
            </p>
            <h1
              style={{
                fontSize: "var(--t-5)",
                fontWeight: 700,
                marginTop: "var(--s-4)",
                letterSpacing: "-0.038em",
              }}
            >
              404
            </h1>
            <p className="lede" style={{ margin: "var(--s-5) auto 0", maxWidth: "38ch" }}>
              Cette page n&apos;existe pas. / This page does not exist.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/fr">
                Retour à l&apos;accueil
              </Link>
              <Link className="btn" href="/en">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
