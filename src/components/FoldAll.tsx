"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Déplier ou replier toute une section d'un coup.
 *
 * Deux lecteurs ne veulent pas la même chose du même document. Le recruteur
 * veut cinq fiches courtes ; l'ingénieur qui fait passer l'entretien technique
 * veut tout, et ne veut pas cliquer cinq fois pour l'avoir. Une seule bascule
 * sert les deux sans rien coûter au premier.
 *
 * Le bouton pilote les `<details>` de son propre conteneur — jamais ceux du
 * document entier : replier les projets depuis les expériences serait une
 * action à distance, et une action à distance ne s'annule pas de tête.
 */

/**
 * L'état réel des dépliages d'une section.
 *
 * Le bouton ne tient aucun état de son côté : il lit celui du DOM. Si on
 * déplie les cinq fiches une par une, il doit proposer de replier — un bouton
 * qui garde sa propre idée de l'état finit par contredire ce qu'on voit.
 *
 * `null` couvre deux cas au même prix : le rendu serveur, et une section sans
 * dépliage. Dans les deux, il n'y a rien à piloter et le bouton ne s'affiche
 * pas — sans JavaScript, les `<details>` restent utilisables un par un, ce qui
 * vaut mieux qu'un bouton mort.
 */
function useAllOpen(target: string): boolean | null {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const root = document.getElementById(target);
      if (!root) return () => {};
      /* `toggle` ne remonte pas : on l'attrape donc à la descente. */
      root.addEventListener("toggle", onChange, true);
      return () => root.removeEventListener("toggle", onChange, true);
    },
    [target],
  );

  const read = useCallback(() => {
    const root = document.getElementById(target);
    if (!root) return null;
    const folds = [...root.querySelectorAll<HTMLDetailsElement>("details.fold")];
    return folds.length ? folds.every((d) => d.open) : null;
  }, [target]);

  return useSyncExternalStore(subscribe, read, () => null);
}

export function FoldAll({
  target,
  expandLabel,
  collapseLabel,
}: {
  /** Id de la section dont on pilote les dépliages. */
  target: string;
  expandLabel: string;
  collapseLabel: string;
}) {
  const open = useAllOpen(target);

  const toggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const root = document.getElementById(target);
      if (!root) return;
      const next = !open;
      root
        .querySelectorAll<HTMLDetailsElement>("details.fold")
        .forEach((d) => (d.open = next));
      /* On replie depuis le bas de la section : sans cela, le document se
         rétracte au-dessus du pouce et le bouton part hors du champ. */
      if (!next) e.currentTarget.scrollIntoView({ block: "nearest" });
    },
    [open, target],
  );

  if (open === null) return null;

  return (
    <button type="button" className="foldall" onClick={toggle}>
      <span className="foldall-sign" aria-hidden="true" data-open={open || undefined} />
      {(open ? collapseLabel : expandLabel).toUpperCase()}
    </button>
  );
}
