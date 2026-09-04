import Link from "next/link";
import type { Content, Locale } from "@/content";
import { LOCALE_NAMES } from "@/content";
import type { CvTarget } from "@/lib/cv";
import { BrandMark } from "./BrandMark";
import { MobileNav } from "./MobileNav";
import { NavAnchors } from "./NavAnchors";

interface TopNavProps {
  lang: Locale;
  other: Locale;
  nav: Content["nav"];
  name: string;
  cv: CvTarget;
  /** Sur la vue classique, le lien de service ramène au site plutôt qu'il n'en sort. */
  onClassicPage?: boolean;
  classicLabel: string;
  siteLabel: string;
}

/**
 * Barre de navigation — elle suit le défilement, mais ne se transforme pas.
 *
 * Le rail latéral dit *où l'on est* ; la barre du haut donne accès *à tout, à
 * tout moment*. Elle reste donc collée en haut du champ, à hauteur constante :
 * elle ne rétrécit pas, ne change pas d'opacité et ne réapparaît pas au
 * défilement inverse. Ce qui colle et ce qui bouge sont deux choses
 * différentes — ici, seule la première.
 *
 * Le fond est opaque plutôt que flouté : un `backdrop-filter` créerait un bloc
 * conteneur pour les descendants fixes, et le voile plein écran du menu
 * mobile, qui vit dans cette barre, cesserait de couvrir la page.
 *
 * Seules les sections marquées `primary` y figurent. Les liens de service —
 * langue, vue classique, CV — sont encadrés d'un filet pour se distinguer des
 * ancres sans ajouter une couleur de plus.
 */
export function TopNav({
  lang,
  other,
  nav,
  name,
  cv,
  onClassicPage = false,
  classicLabel,
  siteLabel,
}: TopNavProps) {
  const home = `/${lang}`;
  const anchors = nav.sections.filter((s) => s.primary);

  return (
    <div className="nav-bar">
      <div className="shell">
        <nav className="nav" aria-label={nav.primaryNavLabel}>
          <Link className="brand" href={home}>
            <BrandMark />
            <span>
              <span className="brand-name">{name}</span>
              <span className="brand-role">{nav.brandRole}</span>
            </span>
          </Link>

          <div className="nav-links nav-wide">
            {!onClassicPage ? (
              <NavAnchors anchors={anchors} sections={nav.sections} />
            ) : null}

            <Link
              className="nav-utility"
              href={onClassicPage ? home : `${home}/cv`}
              prefetch={false}
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
            >
              {other.toUpperCase()}
            </Link>
          </div>

          {/* Sous 900 px, tout ce qui précède se replie derrière un bouton. */}
          <MobileNav
            lang={lang}
            other={other}
            nav={nav}
            cv={cv}
            onClassicPage={onClassicPage}
            classicLabel={classicLabel}
            siteLabel={siteLabel}
          />
        </nav>
      </div>
    </div>
  );
}
