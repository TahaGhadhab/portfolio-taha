import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { LOCALES, getContent, isLocale } from "@/content";
import "../globals.css";

/* --- Trois familles maximum : titres / corps / données --- */
const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14161A",
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
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <head>
        {/* Sans JavaScript, rien n'anime : le contenu doit alors être visible
            d'emblée, sinon les sections resteraient à opacité zéro. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-panel focus:text-ink focus:border focus:border-cyan focus:rounded-[3px]"
        >
          {c.nav.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
