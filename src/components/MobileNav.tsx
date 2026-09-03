"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Content, Locale } from "@/content";
import { LOCALE_NAMES } from "@/content";
import type { CvTarget } from "@/lib/cv";

interface MobileNavProps {
  lang: Locale;
  other: Locale;
  nav: Content["nav"];
  cv: CvTarget;
  onClassicPage: boolean;
  classicLabel: string;
  siteLabel: string;
}

/**
 * La navigation du petit écran.
 *
 * Sur téléphone, la barre du haut n'a pas la place de porter huit ancres :
 * elles se replient derrière un seul bouton et s'ouvrent en une planche
 * pleine page, une station par ligne, numérotée comme le rail latéral du
 * grand écran. Le panneau se ferme à l'Échap, au toucher hors cadre et dès
 * qu'une station est choisie — le défilement n'est relancé qu'une fois le
 * verrou du corps levé, sinon le navigateur saute au lieu de glisser.
 */
export function MobileNav({
  lang,
  other,
  nav,
  cv,
  onClassicPage,
  classicLabel,
  siteLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pending = useRef<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const home = `/${lang}`;

  const close = useCallback(() => setOpen(false), []);

  /* Verrou du corps + Échap, tant que la planche est ouverte. */
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    addEventListener("keydown", onKey);
    panelRef.current?.focus();

    return () => {
      body.style.overflow = previous;
      removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  /* La cible retenue au moment du choix n'est rejointe qu'après la fermeture. */
  useEffect(() => {
    if (open || !pending.current) return;
    const id = pending.current;
    pending.current = null;
    const target = document.getElementById(id);
    if (!target) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }, [open]);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!document.getElementById(id)) return; // pas d'ancre ici : lien normal
    e.preventDefault();
    pending.current = id;
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="menu-sheet"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`menu-glyph${open ? " is-open" : ""}`} aria-hidden="true">
          <span />
          <span />
        </span>
        {(open ? nav.menuCloseLabel : nav.menuLabel).toUpperCase()}
      </button>

      <div
        id="menu-sheet"
        className={`menu-sheet${open ? " is-open" : ""}`}
        inert={!open}
      >
        <button
          type="button"
          className="menu-scrim"
          tabIndex={-1}
          aria-hidden="true"
          onClick={close}
        />
        <div className="menu-panel" ref={panelRef} tabIndex={-1}>
          {!onClassicPage ? (
            <nav aria-label={nav.sectionsNavLabel}>
              <ul className="menu-list">
                {nav.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} onClick={(e) => goTo(e, s.id)}>
                      <span className="menu-no">{String(i + 1).padStart(2, "0")}</span>
                      <span className="menu-lab">{s.label}</span>
                      <span className="menu-tick" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="menu-utils">
            <Link
              className="nav-utility"
              href={onClassicPage ? home : `${home}/cv`}
              prefetch={false}
              onClick={close}
            >
              {onClassicPage ? siteLabel : classicLabel}
            </Link>

            {cv.isPdf ? (
              <a
                className="nav-utility"
                href={cv.href}
                download={cv.download}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                {nav.downloadCv}
              </a>
            ) : null}

            <Link
              className="nav-utility"
              href={onClassicPage ? `/${other}/cv` : `/${other}`}
              hrefLang={other}
              aria-label={`${nav.langLabel} : ${LOCALE_NAMES[other]}`}
              prefetch={false}
              onClick={close}
            >
              {other.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
