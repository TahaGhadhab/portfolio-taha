"use client";

import { useEffect, useRef } from "react";

/** Entendu par le vol : le titre attend que le rideau soit levé. */
export const OVERTURE_END = "overture:end";
const SEEN = "overture-seen";
/* Proportions du fichier source, partagé avec le vol. */
const IMAGE_W = 1536;
const IMAGE_H = 1024;

/* Décidé avant la première image, pendant l'analyse du HTML : sinon la page
   apparaîtrait une fraction de seconde avant le noir. Pas d'ouverture pour
   un lien profond, un mouvement réduit, ou une seconde visite dans la même
   session — on ne fait pas attendre deux fois le même lecteur. */
const DECIDE = `(function(){try{var o=document.getElementById("overture");if(!o||location.hash||matchMedia("(prefers-reduced-motion: reduce)").matches||sessionStorage.getItem("${SEEN}"))return;o.dataset.state="play"}catch(e){}})()`;

interface OvertureProps {
  lang: "fr" | "en";
}

/**
 * L'ouverture.
 *
 * Un noir complet, puis deux yeux qui s'allument dans le noir, un battement
 * de paupières, et seulement ensuite le hibou entier. Il glisse alors jusqu'à
 * la place exacte qu'il occupe dans l'accueil, et s'y fond : c'est la même
 * image que celle du vol, on ne montre rien qu'on ne retrouve pas juste après.
 *
 * Tout le déroulé est en CSS (`portfolio-overture.css`) ; ce composant mesure
 * la destination du glissement, puis lève le rideau à la fin — ou plus tôt si
 * le lecteur le demande : un clic, une touche, ou « Passer ».
 */
export function Overture({ lang }: OvertureProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.state !== "play") return;

    /* Où se trouve le hibou du vol, une fois son cadrage `cover` appliqué ?
       Si la page a été rouverte plus bas, il n'est pas à l'écran : l'image
       s'efface alors sur place. */
    const art = el.querySelector<HTMLElement>(".overture-art");
    const owl = document.querySelector<HTMLElement>(".fiber-owl");
    if (art && owl && scrollY < 8) {
      const a = art.getBoundingClientRect();
      const o = owl.getBoundingClientRect();
      const scale = Math.max(o.width / IMAGE_W, o.height / IMAGE_H);
      const w = IMAGE_W * scale;
      const h = IMAGE_H * scale;
      const [, py = "50%"] = getComputedStyle(owl).objectPosition.split(" ");
      const fy = py.endsWith("%") ? parseFloat(py) / 100 : 0.5;
      const cx = o.left + o.width / 2;
      const cy = o.top + (o.height - h) * fy + h / 2;
      el.style.setProperty("--to-x", `${(cx - (a.left + a.width / 2)).toFixed(1)}px`);
      el.style.setProperty("--to-y", `${(cy - (a.top + a.height / 2)).toFixed(1)}px`);
      el.style.setProperty("--to-s", (w / a.width).toFixed(4));
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.dataset.state = "done";
      try { sessionStorage.setItem(SEEN, "1"); } catch {}
      dispatchEvent(new Event(OVERTURE_END));
    };
    const skip = () => {
      if (el.dataset.state !== "play") return;
      el.dataset.state = "leaving";
      window.setTimeout(finish, 450);
    };
    const onEnd = (event: AnimationEvent) => {
      if (event.target === el && event.animationName === "overture-out") finish();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") skip();
    };
    /* Filet de sécurité : si une animation ne se termine jamais (onglet en
       arrière-plan, moteur sans support), la page ne reste pas noire. */
    const fallback = window.setTimeout(finish, 7500);

    el.addEventListener("animationend", onEnd);
    el.addEventListener("click", skip);
    addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(fallback);
      el.removeEventListener("animationend", onEnd);
      el.removeEventListener("click", skip);
      removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div ref={ref} id="overture" className="overture" data-state="idle" aria-hidden="true" suppressHydrationWarning>
        <div className="overture-art">
          <div className="overture-frame">
            {/* eslint-disable-next-line @next/next/no-img-element -- même fichier que le vol, déjà préchargé */}
            <img src="/images/fiber-owl-hero.webp" alt="" decoding="async" />
          </div>
          <span className="overture-glow" />
        </div>
        <span className="overture-bar top" />
        <span className="overture-bar bottom" />
        <span className="overture-skip mono">{lang === "fr" ? "Passer" : "Skip"}</span>
      </div>
      <script
        type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: DECIDE }}
      />
    </>
  );
}
