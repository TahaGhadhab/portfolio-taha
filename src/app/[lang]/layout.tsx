import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Instrument_Serif, Literata, Martian_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LOCALES, getContent, isLocale } from "@/content";
import "../globals.css";

/* --- Quatre familles, aucun rôle partagé ------------------------------
   Le document parle de deux choses à la fois : une affirmation, et un
   relevé. Il lui faut donc deux voix qui ne se ressemblent pas.

   Instrument Serif porte les titres. Une didone à fort contraste sur un
   propos d'ingénieur, c'est un choix décidé — c'est aussi la seule chose
   de cette page qui ne pourrait pas sortir d'un gabarit. Un seul poids,
   aucun axe : elle est ce qu'elle est, et on ne la déforme pas.

   Archivo tient l'interface — sous-titres, boutons, marque. Sa variation
   de chasse (`wdth`) sert là où un libellé doit tenir dans une largeur
   donnée sans changer de fonte.

   Literata porte le corps du texte, avec l'axe optique (`opsz`) qui
   adapte le dessin à la taille réelle.

   Martian Mono porte les données et les libellés — jamais une phrase.
   Elle est dessinée large et usinée : elle ressemble à ce qu'on lit sur
   un cadran, pas à du code. --- */
const title = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
});

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

const mono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
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
      className={`${title.variable} ${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/* Sans JavaScript, aucune section ne s'engage : elles resteraient à
            opacité zéro. Le contenu doit alors être visible d'emblée. */}
        <noscript>
          <style>{
            `.commit{opacity:1 !important;translate:none !important}` +
            `.commit[data-stagger]>*,.wi{opacity:1 !important;translate:none !important}` +
            `.hero,.hero .lede,.hero-actions,.hero-stats>div,.wordmark-strip` +
            `{opacity:1 !important;translate:none !important}` +
            `.wordmark-strip .hair{scale:1 1 !important}` +
            `.eyebrow .rule{scale:1 1 !important}` +
            `.metric,.pull{background-size:2px 100% !important}` +
            `.group{background-size:100% 1px !important}` +
            `.head-intro{opacity:1 !important}`
          }</style>
        </noscript>
      </head>
      <body>
        <a className="skip" href="#contenu">
          {c.nav.skipToContent}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
