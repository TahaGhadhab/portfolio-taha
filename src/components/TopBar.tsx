"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Content, Locale } from "@/content";
import type { CvTarget } from "@/lib/cv";

interface TopBarProps {
  lang: Locale;
  other: Locale;
  nav: Content["nav"];
  cv: CvTarget;
  /** `true` sur la page CV : on remplace le lien classique par un retour cockpit. */
  onClassicPage?: boolean;
  classicLabel: string;
}

/**
 * Barre fixe. Trois éléments ne disparaissent jamais, quelle que soit la
 * largeur : le CV PDF, la bascule vue classique, et le sélecteur de langue.
 * Les ancres de section sont l'unique partie repliée sur mobile.
 */
export function TopBar({
  lang,
  other,
  nav,
  cv,
  onClassicPage = false,
  classicLabel,
}: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-base/92 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href={`/${lang}`}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Taha Ghadhab"
        >
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-amber"
            style={{ animation: "pulse-lamp 2.8s ease-in-out infinite" }}
          />
          <span className="font-mono text-xs tracking-[0.16em] text-ink transition-colors group-hover:text-cyan">
            <span className="hidden xs:inline">T. GHADHAB</span>
            <span className="xs:hidden">TG</span>
          </span>
        </Link>

        {/* Ancres de section — desktop uniquement, jamais porteuses d'info unique */}
        <nav aria-label={nav.sections.map((s) => s.label).join(", ")} className="ml-4 hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="rounded-[3px] px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch lang={lang} other={other} label={nav.langLabel} />

          {/* Bascule vue classique — visible à toutes les largeurs, icône seule
              sur les écrans les plus étroits (libellé porté par aria-label). */}
          <Link
            href={onClassicPage ? `/${lang}` : `/${lang}/cv`}
            aria-label={onClassicPage ? nav.cockpitView : classicLabel}
            className="push-button inline-flex items-center gap-2 px-2.5 py-1.5 sm:px-3"
          >
            {onClassicPage ? <CockpitIcon /> : <DocumentIcon />}
            <span className="hidden sm:inline">
              {onClassicPage ? nav.cockpitView : classicLabel}
            </span>
          </Link>

          <a
            href={cv.href}
            {...(cv.isPdf
              ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="push-button push-button--primary px-3 py-1.5"
          >
            {nav.downloadCv}
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({
  lang,
  other,
  label,
}: {
  lang: Locale;
  other: Locale;
  label: string;
}) {
  return (
    <div
      className="flex items-center overflow-hidden rounded-[3px] border border-line"
      role="group"
      aria-label={label}
    >
      <span
        aria-current="true"
        className="bg-panel px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink"
      >
        {lang}
      </span>
      <Link
        href={`/${other}`}
        hrefLang={other}
        className="px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:bg-panel hover:text-cyan"
      >
        {other}
      </Link>
    </div>
  );
}

/* --- Icônes d'interface : traits fins, esprit panneau de contrôle --- */

function DocumentIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 1.5h6l3 3v10h-9v-13Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9.5 1.5v3.5h3M5.5 8h5M5.5 10.5h5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CockpitIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 8l3-2.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}
