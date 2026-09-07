import type { FlowNode, ProjectFigure as Figure } from "@/content";

/**
 * Les planches des projets.
 *
 * Même règle que pour les figures du document : une planche ne décore pas,
 * elle démontre. Celles-ci portent ce qu'un paragraphe met trente secondes à
 * dire — par où passe un PDF, dans quel ordre quatre tentatives sont faites,
 * ce que le mode `auto` détruit que le mode `precise` préserve, où tombe une
 * mesure dans son intervalle.
 *
 * Elles sont dessinées **étroites et verticales**, comme le circuit de la
 * méthode et pour la même raison : une planche large ramenée à la largeur
 * d'une colonne rend ses étiquettes à sept pixels, et une planche illisible
 * ne démontre rien. Les originaux — des planches de rapport tirées en
 * paysage sur 1080 unités — sont donc retracés en portrait sur 400, pas mis à
 * l'échelle. C'est aussi ce qui leur évite le défilement horizontal sur
 * téléphone, qu'aucune hiérarchie mobile ne rattrape.
 *
 * Aucun libellé n'est écrit ici : ils viennent tous du contenu, sans quoi la
 * planche n'aurait pas de version anglaise.
 */

/**
 * Largeur de tracé commune à toutes les planches.
 *
 * Elle n'est pas choisie sur l'écran mais sur le texte : à 10,5 unités de
 * mono, une colonne de 206 tient vingt-huit caractères, et vingt-huit
 * caractères suffisent à nommer un poste. La colonne latérale a été élargie
 * à 160 après mesure : une sortie nommée « occurrence suivante » débordait de
 * son cadre à 144.
 */
const W = 400;
/** Colonne principale — le flux, les niveaux. */
const COL = { x: 6, w: 206 };
/** Colonne latérale — ce qui sort du flux sans y revenir. */
const SIDE = { x: 234, w: 160 };

/** Une pointe de flèche pleine, tracée à la main. Pas de `marker`, pas d'id. */
function head(x: number, y: number, dir: "e" | "s", s = 4.5) {
  return dir === "e"
    ? `M${x} ${y} L${x - s} ${y - s} L${x - s} ${y + s} Z`
    : `M${x} ${y} L${x - s} ${y - s} L${x + s} ${y - s} Z`;
}

/**
 * Un cadre. À pans coupés quand le poste branche.
 *
 * Le losange du plan d'origine est ici impraticable : à 206 unités de large il
 * n'aurait plus de place pour son texte. Les coins coupés disent la même
 * chose — ce poste a plusieurs sorties — pour un quart de la surface.
 */
function Frame({
  x,
  y,
  w,
  h,
  cls,
  cut = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  cls: string;
  cut?: boolean;
}) {
  if (!cut) return <rect className={cls} x={x} y={y} width={w} height={h} />;
  const c = 10;
  const p = [
    `M${x + c} ${y}`,
    `H${x + w - c}`,
    `L${x + w} ${y + c}`,
    `V${y + h - c}`,
    `L${x + w - c} ${y + h}`,
    `H${x + c}`,
    `L${x} ${y + h - c}`,
    `V${y + c}`,
    "Z",
  ].join(" ");
  return <path className={cls} d={p} />;
}

/** Les lignes de précision d'un cadre, toujours ramenées à un tableau. */
const subs = (sub: FlowNode["sub"]) => (sub === undefined ? [] : Array.isArray(sub) ? sub : [sub]);

/** Hauteur d'un cadre : son titre, plus une ligne par précision. */
const nodeH = (n: FlowNode) => 40 + subs(n.sub).length * 14;

/**
 * Le titre d'un cadre et ses précisions, centrés dans le cadre.
 *
 * Le bloc est centré sur la hauteur, pas le titre : un cadre à deux lignes de
 * précision et un cadre nu se posent alors sur la même ligne d'axe.
 */
function Caption({
  cx,
  y,
  h,
  node,
  tone,
}: {
  cx: number;
  y: number;
  h: number;
  node: FlowNode;
  tone?: string;
}) {
  const lines = subs(node.sub);
  const top = y + h / 2 - (lines.length * 14) / 2 + 4;
  return (
    <>
      <text className={`pf-t${tone ? ` ${tone}` : ""}`} x={cx} y={top}>
        {node.title}
      </text>
      {lines.map((line, i) => (
        <text className="pf-s" x={cx} y={top + 14 + i * 14} key={line}>
          {line}
        </text>
      ))}
    </>
  );
}

/* ── Le flux ─────────────────────────────────────────────── */

/**
 * Une chaîne de traitement : les postes en colonne, les sorties sur le côté.
 *
 * Ce qui quitte le flux ne revient pas — un refus, une occurrence ignorée, une
 * fiche ouverte. Les poser à droite plutôt que dans la colonne dit exactement
 * cela : la colonne est le chemin nominal, et il n'en a qu'un.
 */
function Flow({ fig }: { fig: Extract<Figure, { kind: "flow" }> }) {
  const all = [...fig.nodes, fig.outcome];
  const rows: { y: number; h: number }[] = [];
  let y = 4;
  for (const n of all) {
    const h = nodeH(n);
    rows.push({ y, h });
    y += h + 26;
  }
  const H = y - 22;
  const last = all.length - 1;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={fig.alt}>
      {rows.map((r, i) => {
        const n = all[i];
        const ok = i === last;
        return (
          <g key={i}>
            <Frame
              x={COL.x}
              y={r.y}
              w={COL.w}
              h={r.h}
              cls={ok ? "pf-box pf-box-ok" : n.decision ? "pf-box pf-box-key" : "pf-box"}
              cut={n.decision}
            />
            <Caption cx={COL.x + COL.w / 2} y={r.y} h={r.h} node={n} tone={ok ? "pf-ok" : undefined} />
            {i < last ? (
              <>
                <line
                  className="pf-line"
                  x1={COL.x + COL.w / 2}
                  y1={r.y + r.h}
                  x2={COL.x + COL.w / 2}
                  y2={rows[i + 1].y - 5}
                />
                <path className="pf-head" d={head(COL.x + COL.w / 2, rows[i + 1].y, "s")} />
              </>
            ) : null}
          </g>
        );
      })}

      {(fig.exits ?? []).map((e, i) => {
        const src = rows[e.from];
        const h = nodeH({ title: e.title, sub: e.sub }) - 2;
        const by = src.y + src.h / 2 - h / 2;
        const cy = src.y + src.h / 2;
        const tone = e.tone === "ok" ? "pf-ok" : e.tone === "fault" ? "pf-fault" : undefined;
        return (
          <g key={`e${i}`}>
            <line className="pf-line" x1={COL.x + COL.w} y1={cy} x2={SIDE.x - 5} y2={cy} />
            <path className="pf-head" d={head(SIDE.x, cy, "e")} />
            <text className="pf-e" x={SIDE.x} y={by - 6}>
              {e.edge}
            </text>
            <rect
              className={`pf-box${e.tone === "fault" ? " pf-box-fault" : e.tone === "ok" ? " pf-box-ok" : ""}`}
              x={SIDE.x}
              y={by}
              width={SIDE.w}
              height={h}
            />
            <Caption cx={SIDE.x + SIDE.w / 2} y={by} h={h} node={{ title: e.title, sub: e.sub }} tone={tone} />
          </g>
        );
      })}
    </svg>
  );
}

/* ── L'échelle de tentatives ─────────────────────────────── */

/**
 * Quatre niveaux essayés dans l'ordre, le premier qui répond gagne.
 *
 * L'ordre est l'affirmation de la planche : c'est parce que le niveau décisif
 * est consulté avant le niveau flou que la détection passe de rien à tout. Il
 * est donc le seul tracé en iris — la couleur ne souligne pas un niveau
 * important, elle marque celui qui a changé le résultat.
 */
function Ladder({ fig }: { fig: Extract<Figure, { kind: "ladder" }> }) {
  const IN_H = nodeH(fig.input) - 8;
  const LV_H = 58;
  const HIT = { x: SIDE.x, w: SIDE.w, h: 40 };
  const PITCH = LV_H + 30;
  const top = 4 + IN_H + 24;
  const H = top + fig.levels.length * PITCH + 34 + 4;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={fig.alt}>
      <rect className="pf-box pf-box-sunk" x={COL.x} y={4} width={W - 12} height={IN_H} />
      <Caption cx={W / 2} y={4} h={IN_H} node={fig.input} />
      <line className="pf-line" x1={COL.x + COL.w / 2} y1={4 + IN_H} x2={COL.x + COL.w / 2} y2={top - 5} />
      <path className="pf-head" d={head(COL.x + COL.w / 2, top, "s")} />

      {fig.levels.map((lv, i) => {
        const y = top + i * PITCH;
        const cy = y + LV_H / 2;
        const hy = cy - HIT.h / 2;
        const key = lv.key ? " pf-box-key" : "";
        const tone = lv.key ? "pf-key" : undefined;
        return (
          <g key={lv.no}>
            <rect className={`pf-box${key}`} x={COL.x} y={y} width={COL.w} height={LV_H} />
            <text className="pf-n" x={COL.x + 12} y={y + 18}>
              {lv.no}
            </text>
            <text className={`pf-t pf-t-start${tone ? ` ${tone}` : ""}`} x={COL.x + 12} y={y + 36}>
              {lv.name}
            </text>
            <text className="pf-s pf-s-start" x={COL.x + 12} y={y + 50}>
              {lv.test}
            </text>

            <line className="pf-line" x1={COL.x + COL.w} y1={cy} x2={HIT.x - 5} y2={cy} />
            <path className="pf-head" d={head(HIT.x, cy, "e")} />
            <rect className={`pf-box${key}`} x={HIT.x} y={hy} width={HIT.w} height={HIT.h} />
            <Caption
              cx={HIT.x + HIT.w / 2}
              y={hy}
              h={HIT.h}
              node={{ title: lv.hit, sub: lv.note }}
              tone={tone}
            />

            <line
              className="pf-line"
              x1={COL.x + COL.w / 2}
              y1={y + LV_H}
              x2={COL.x + COL.w / 2}
              y2={y + PITCH - 5}
            />
            <path className="pf-head" d={head(COL.x + COL.w / 2, y + PITCH, "s")} />
            <text className="pf-e" x={COL.x + COL.w / 2 + 10} y={y + LV_H + 20}>
              {fig.failLabel}
            </text>
          </g>
        );
      })}

      <rect
        className="pf-box pf-box-sunk"
        x={COL.x}
        y={top + fig.levels.length * PITCH}
        width={COL.w}
        height={34}
      />
      <Caption cx={COL.x + COL.w / 2} y={top + fig.levels.length * PITCH} h={34} node={{ title: fig.none }} />
    </svg>
  );
}

/* ── L'avant / après ─────────────────────────────────────── */

/**
 * Trois bandes empilées : l'original, puis ce que chaque option en fait.
 *
 * La comparaison ne tient qu'à la largeur du cache — c'est donc la largeur du
 * cache, et rien d'autre, qui change d'une bande à l'autre. Le voisin de
 * droite est présent dans les trois : on voit à l'œil lequel des deux modes le
 * détruit.
 */
function Bands({ fig }: { fig: Extract<Figure, { kind: "bands" }> }) {
  const X = 6;
  const BW = W - 12;
  const SH = 44;
  // La coupe est posee sur le texte, pas au milieu : le segment de gauche
  // porte vingt caracteres, celui de droite vingt-quatre.
  const SPLIT = X + 158;

  const rows: { y: number; h: number }[] = [];
  let y = 4;
  for (const r of fig.rows) {
    const h = 16 + SH + (r.note ? 18 : 0);
    rows.push({ y, h });
    y += h + 18;
  }
  const H = y - 14;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={fig.alt}>
      {fig.rows.map((r, i) => {
        const { y: ry } = rows[i];
        const sy = ry + 16;
        const mw = r.mask === "wide" ? BW - 8 : r.mask === "narrow" ? SPLIT - X - 8 : 0;
        const mcls =
          r.tone === "fault" ? "pf-mask pf-mask-fault" : r.tone === "ok" ? "pf-mask pf-mask-ok" : "pf-mask";
        return (
          <g key={r.label}>
            <text className="pf-n" x={X} y={ry + 8}>
              {r.label}
            </text>
            <rect className="pf-box" x={X} y={sy} width={BW} height={SH} />
            {r.mask && r.mask !== "none" ? (
              <rect className={mcls} x={X + 4} y={sy + 5} width={mw} height={SH - 10} />
            ) : (
              <line className="pf-hair" x1={SPLIT} y1={sy + 5} x2={SPLIT} y2={sy + SH - 5} />
            )}
            <text
              className={`pf-s pf-s-start${r.tone === "fault" ? " pf-fault" : r.tone === "ok" ? " pf-key" : ""}`}
              x={X + 12}
              y={sy + SH / 2 + 4}
            >
              {r.left}
            </text>
            {r.right ? (
              <text className="pf-s pf-s-start" x={SPLIT + 10} y={sy + SH / 2 + 4}>
                {r.right}
              </text>
            ) : null}
            {r.note ? (
              <text
                className={`pf-e${r.tone === "fault" ? " pf-fault" : r.tone === "ok" ? " pf-key" : ""}`}
                x={X}
                y={sy + SH + 14}
              >
                {r.note}
              </text>
            ) : null}
            {i < fig.rows.length - 1 ? (
              <>
                <line className="pf-line" x1={W / 2} y1={ry + rows[i].h} x2={W / 2} y2={ry + rows[i].h + 13} />
                <path className="pf-head" d={head(W / 2, ry + rows[i].h + 18, "s")} />
              </>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

/* ── L'intervalle ────────────────────────────────────────── */

/**
 * Une bande de tolérance et deux mesures posées dessus.
 *
 * L'axe porte trois valeurs calculées, pas illustratives : les bornes sont
 * celles que le moteur écrit dans l'enregistrement. Elles sont incluses — la
 * zone verte va donc jusqu'au trait, ce que seule une figure dit sans
 * ambiguïté.
 */
function Tolerance({ fig }: { fig: Extract<Figure, { kind: "tolerance" }> }) {
  const x0 = 14;
  const x1 = W - 14;
  const span = x1 - x0;
  const at = (t: number) => x0 + t * span;
  const xmin = at(0.25);
  const xmax = at(0.75);
  const xtar = at(0.5);
  const BY = 96;
  const BH = 42;
  const AY = BY + BH + 22;
  const H = AY + 46;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={fig.alt}>
      <text className="pf-e pf-e-start" x={x0} y={14}>
        {fig.rule}
      </text>

      {/* Deux mesures voisines sur l'axe : leurs étiquettes se chevaucheraient
          à la même hauteur. Une ligne sur deux descend d'un cran — le trait de
          rappel s'allonge d'autant et l'axe reste lisible. */}
      {fig.samples.map((s, i) => {
        const sx = at(s.at);
        const dy = i % 2 ? 30 : 0;
        const anchor = s.at > 0.72 ? "end" : s.at < 0.28 ? "start" : "middle";
        const tx = anchor === "end" ? sx + 8 : anchor === "start" ? sx - 8 : sx;
        return (
          <g key={s.label}>
            <text
              className={`pf-e ${s.ok ? "pf-key" : "pf-fault"}`}
              x={tx}
              y={32 + dy}
              textAnchor={anchor}
            >
              {s.label}
            </text>
            <text className="pf-s" x={tx} y={48 + dy} textAnchor={anchor}>
              {s.value}
            </text>
            <line
              className={s.ok ? "pf-line pf-line-key" : "pf-line pf-line-fault"}
              x1={sx}
              y1={56 + dy}
              x2={sx}
              y2={BY - 5}
            />
            <path className={s.ok ? "pf-head pf-key-fill" : "pf-head pf-fault-fill"} d={head(sx, BY, "s")} />
          </g>
        );
      })}

      <rect className="pf-box pf-box-fault" x={x0} y={BY} width={xmin - x0} height={BH} />
      <rect className="pf-box pf-box-key" x={xmin} y={BY} width={xmax - xmin} height={BH} />
      <rect className="pf-box pf-box-fault" x={xmax} y={BY} width={x1 - xmax} height={BH} />
      <text className="pf-s pf-fault" x={(x0 + xmin) / 2} y={BY + BH / 2 + 4}>
        {fig.rejectLabel}
      </text>
      <text className="pf-t pf-key" x={xtar} y={BY + BH / 2 + 4}>
        {fig.passLabel}
      </text>
      <text className="pf-s pf-fault" x={(xmax + x1) / 2} y={BY + BH / 2 + 4}>
        {fig.rejectLabel}
      </text>

      <line className="pf-line" x1={x0} y1={AY} x2={x1} y2={AY} />
      {[
        [xmin, fig.min, fig.minLabel],
        [xtar, fig.target, fig.targetLabel],
        [xmax, fig.max, fig.maxLabel],
      ].map(([x, v, k]) => (
        <g key={k as string}>
          <line className="pf-hair" x1={x as number} y1={BY + BH} y2={AY} x2={x as number} />
          <line className="pf-line" x1={x as number} y1={AY - 4} x2={x as number} y2={AY + 4} />
          <text className="pf-t" x={x as number} y={AY + 20}>
            {v as string}
          </text>
          <text className="pf-n pf-n-mid" x={x as number} y={AY + 34}>
            {k as string}
          </text>
        </g>
      ))}
      <text className="pf-n" x={x1} y={AY - 8} textAnchor="end">
        {fig.unit}
      </text>
    </svg>
  );
}

/* ── La planche et son cadre ─────────────────────────────── */

/**
 * Une planche complète : son numéro, son titre, le tracé, sa lecture.
 *
 * La légende n'est pas une redite du titre. Elle porte ce que le dessin
 * montre mais n'affirme pas — pourquoi cet ordre, pourquoi ce refus, ce que
 * l'option de droite préserve.
 */
export function ProjectPlate({ fig }: { fig: Figure }) {
  return (
    <figure className="plate plate-project">
      <p className="mono pf-no">
        <span>{fig.no}</span>
        <span className="rule" aria-hidden="true" />
      </p>
      <p className="pf-title">{fig.title}</p>
      {fig.kind === "flow" ? <Flow fig={fig} /> : null}
      {fig.kind === "ladder" ? <Ladder fig={fig} /> : null}
      {fig.kind === "bands" ? <Bands fig={fig} /> : null}
      {fig.kind === "tolerance" ? <Tolerance fig={fig} /> : null}
      <figcaption>{fig.caption}</figcaption>
    </figure>
  );
}
