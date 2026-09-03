import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Literata, IBM_Plex_Mono } from "next/font/google";
import { LOCALES, getContent, isLocale } from "@/content";
import "../globals.css";

/* --- Trois familles, aucun rôle partagé -------------------------------
   Archivo porte les titres : la variation de chasse (`wdth`) permet de
   resserrer un grand titre sans changer de fonte. Literata porte le corps
   du texte, avec l'axe optique (`opsz`) qui adapte le dessin à la taille
   réelle. IBM Plex Mono porte les données et les libellés — jamais une
   phrase. --- */
const display = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const body = Literata({
  variable: "--font-literata",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0E0C",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

/** Toute langue non supportée renvoie un 404 plutôt qu'une page vide. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const c = getContent(lang);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "profile",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = getContent(lang);

  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/* Sans JavaScript, aucune section ne s'engage : elles resteraient à
            opacité zéro. Le contenu doit alors être visible d'emblée. */}
        <noscript>
          <style>{`.commit{opacity:1 !important}.hero{opacity:1 !important;translate:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip" href="#contenu">
          {c.nav.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
