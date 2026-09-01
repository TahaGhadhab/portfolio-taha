import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * 404 global. Le root layout vit sous un segment dynamique (`[lang]`), donc
 * aucune langue ne peut être déduite ici : la page est bilingue par défaut et
 * renvoie vers les deux entrées. Elle contourne le rendu normal, d'où
 * l'import explicite des styles et des polices.
 */
const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Taha Ghadhab",
  description: "Page introuvable / Page not found.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${display.variable} ${mono.variable} h-full`}>
      <body className="flex min-h-full flex-col items-center justify-center px-6 text-center">
        <div className="grid-blueprint pointer-events-none fixed inset-0" aria-hidden="true" />

        <div className="relative">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-fault">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-fault" />
            Signal perdu / Signal lost
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-7xl font-bold tracking-tight text-ink sm:text-8xl">
            404
          </h1>

          <p className="mt-4 text-muted">
            Cette page n&apos;existe pas.
            <span className="mx-2 text-line" aria-hidden="true">
              /
            </span>
            This page does not exist.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/fr" className="push-button push-button--primary px-5 py-3">
              Retour à l&apos;accueil
            </Link>
            <Link href="/en" className="push-button px-5 py-3">
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
