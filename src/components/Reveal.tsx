"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Décalage en ms, pour un effet d'escalier sur une liste. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Révèle son contenu quand il entre dans le viewport — une seule fois.
 * L'observateur se débranche après le déclenchement : rien ne rejoue si
 * l'utilisateur remonte, conformément au design system.
 *
 * L'état est porté par un attribut DOM plutôt que par `useState` : c'est bien
 * une synchronisation avec une API de plateforme, et cela évite un rendu React
 * par élément révélé. Le repli sans `IntersectionObserver` affiche le contenu.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.dataset.revealed = "true";
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-revealed="false"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
