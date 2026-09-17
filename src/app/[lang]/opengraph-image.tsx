import { ImageResponse } from "next/og";
import { getContent, isLocale, LOCALES } from "@/content";
import { SITE_URL } from "@/lib/site";

/**
 * L'aperçu de partage (LinkedIn, messageries) : qui, quel niveau, quel
 * terrain — ce qu'un recruteur doit lire sans cliquer.
 *
 * `ImageResponse` ne lit pas les variables CSS : les couleurs sont recopiées
 * ici depuis les jetons de la palette vellum (`globals.css`), et nulle part
 * ailleurs dans les composants.
 */
const VOID = "#0B0E0C";
const VELLUM = "#EDF0E7";
const TEXT = "#C9CEC3";
const SAGE = "#8FA396";
const BRASS = "#E8A21C";
const LINE = "#1F2922";

export const alt = "Taha Ghadhab, élève ingénieur en génie industriel · industrial engineering student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(isLocale(lang) ? lang : "fr");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: VOID,
          border: `18px solid ${VOID}`,
          outline: `1px solid ${LINE}`,
          color: VELLUM,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* L'œil, seul signe de la marque sur l'aperçu. */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 64,
              background: BRASS,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 26, height: 26, borderRadius: 26, background: VOID }} />
          </div>
          <div style={{ display: "flex", fontSize: 26, color: SAGE, letterSpacing: 2 }}>
            {c.hero.wordmark}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            {c.hero.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, color: TEXT, maxWidth: 1000 }}>
            {c.hero.eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: TEXT }}>{SITE_URL.host}</div>
          <div style={{ display: "flex", fontSize: 24, color: SAGE }}>Safran · PharmacoWork</div>
        </div>
      </div>
    ),
    size,
  );
}
