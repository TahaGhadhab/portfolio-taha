"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Content, Locale } from "@/content";
import type { CvTarget } from "@/lib/cv";
import { SplitWords } from "./SplitWords";

const rank = (i: number) => ({ "--i": i }) as CSSProperties;
const SIGNALS = [
  "M280 660 C240 490 320 395 410 345 S550 235 450 110",
  "M330 700 C280 510 370 450 420 370 S460 200 380 80",
  "M760 700 C820 510 690 450 650 355 S645 205 720 85",
  "M835 685 C870 510 775 395 695 335 S610 205 805 120",
];

interface FlightProps {
  lang: Locale;
  hero: Content["hero"];
  cv: CvTarget;
  cvLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

export function Flight({ lang, hero, cv, cvLabel, primaryHref, secondaryHref }: FlightProps) {
  const sceneRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);
  const [visible, setVisible] = useState(true);
  const moving = !paused && !reduced && inView && visible;

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(media.matches);
    const syncVisibility = () => setVisible(!document.hidden);
    syncMotion();
    syncVisibility();
    media.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    const frame = requestAnimationFrame(() => setOpen(true));
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
      : null;
    if (sceneRef.current) observer?.observe(sceneRef.current);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      media.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const visual = visualRef.current;
    if (!scene || !visual || !moving) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      visual.style.setProperty("--hero-x", x.toFixed(3));
      visual.style.setProperty("--hero-y", y.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const reset = () => {
      x = 0;
      y = 0;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    scene.addEventListener("pointermove", onMove, { passive: true });
    scene.addEventListener("pointerleave", reset);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(frame);
      visual.style.removeProperty("--hero-x");
      visual.style.removeProperty("--hero-y");
    };
  }, [moving]);

  const afterHeadline = Math.min(hero.headline.split(/\s+/).length, 6);
  const motionLabel = lang === "fr"
    ? paused ? "Reprendre les animations" : "Mettre les animations en pause"
    : paused ? "Resume animations" : "Pause animations";

  return (
    <header ref={sceneRef} className={`flight fiber-flight${open ? " is-open" : ""}`} id="vol" data-moving={moving}>
      <div className="fiber-visual" ref={visualRef} aria-hidden="true">
        <div className="fiber-artwork">
          <Image className="fiber-owl" src="/images/fiber-owl-hero.webp" alt="" fill priority sizes="(max-width: 699px) 100vw, 75vw" />
          <svg className="fiber-signals" viewBox="0 0 1100 740" preserveAspectRatio="xMidYMid slice">
            {SIGNALS.map((d, i) => <path key={d} d={d} pathLength="100" style={rank(i)} />)}
          </svg>
        </div>
        <span className="fiber-visual-shade" />
      </div>

      <div className="shell hero-shell">
        <div className={`hero${open ? " is-open" : ""}`}>
          <p className="hero-name mono">{hero.name}</p>
          <SplitWords as="h1" text={hero.headline} />
          <p className="lede" style={rank(afterHeadline)}>{hero.lede}</p>
          <div className="hero-actions" style={rank(afterHeadline + 1)}>
            <a className="btn btn-primary" href={primaryHref}>{hero.ctaPrimary}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="btn" href={secondaryHref}>{hero.ctaSecondary}<ArrowDown size={15} aria-hidden="true" /></a>
            <a className="hero-cv" href={cv.href} {...(cv.isPdf ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" } : {})}>{cvLabel}<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
          <div className="hero-stats">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} style={rank(afterHeadline + 2 + i)}>
                <span className="v">{stat.value}{stat.unit}</span>
                <span className="k">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-bottom">
          <a className="hero-scroll mono" href="#principe"><ArrowDown size={15} aria-hidden="true" />{hero.wordmark}</a>
          <button className="motion-toggle" type="button" title={motionLabel} aria-label={motionLabel} aria-pressed={paused} onClick={() => setPaused(!paused)} hidden={reduced}>
            {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
