import { useSyncExternalStore } from "react";

/**
 * « Où suis-je » — une seule réponse, deux affichages.
 *
 * Le rail latéral et la barre du haut disent la même chose au même instant.
 * S'ils observaient chacun de leur côté, ils finiraient par diverger d'une
 * section sur un défilement rapide, et le document se contredirait.
 *
 * Un observateur unique tient donc la réponse ; les composants s'y abonnent.
 * Il naît au premier abonné et meurt avec le dernier — rien ne tourne sur une
 * page qui n'a ni rail ni barre.
 *
 * La bande retenue est celle qui occupe la tranche médiane du champ. Quand
 * deux sections s'y trouvent en même temps — le cas d'une bande courte — on
 * garde celle dont l'entrée est la plus proche du centre : la lecture suit le
 * regard, pas l'ordre du document.
 */

let ids: string[] = [];
let active: string | null = null;
let observer: IntersectionObserver | null = null;
const visible = new Map<string, number>();
const listeners = new Set<() => void>();

function publish(next: string | null) {
  if (next === active) return;
  active = next;
  for (const fn of listeners) fn();
}

function recompute() {
  let best: string | null = null;
  let bestRatio = -1;
  for (const id of ids) {
    const ratio = visible.get(id);
    if (ratio === undefined) continue;
    if (ratio > bestRatio) {
      bestRatio = ratio;
      best = id;
    }
  }
  publish(best);
}

function start() {
  if (observer || typeof IntersectionObserver === "undefined") return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
        else visible.delete(entry.target.id);
      }
      recompute();
    },
    /* La tranche médiane : dix pour cent de hauteur au milieu de l'écran.
       Une bande n'est « lue » que lorsqu'elle passe devant le regard, pas
       lorsqu'elle pointe en bas du champ. */
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
  );

  for (const id of ids) {
    const node = document.getElementById(id);
    if (node) observer.observe(node);
  }
}

function stop() {
  observer?.disconnect();
  observer = null;
  visible.clear();
  active = null;
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  start();
  return () => {
    listeners.delete(fn);
    if (listeners.size === 0) stop();
  };
}

/**
 * Déclare la liste des sections observables.
 *
 * Appelée pendant le rendu, avant l'abonnement, parce que l'observateur naît
 * au moment où le premier composant s'abonne et doit déjà savoir quoi
 * regarder. L'opération est idempotente : deux appels avec la même liste ne
 * font rien, et un double rendu n'a aucun effet.
 */
function registerSections(next: string[]) {
  if (next.length === ids.length && next.every((id, i) => id === ids[i])) return;
  ids = next;
  if (observer) {
    stop();
    start();
  }
}

/**
 * L'identifiant de la section en cours de lecture.
 *
 * Vaut `null` au rendu serveur et au premier rendu client : aucun repère n'est
 * allumé tant qu'on n'a pas commencé à lire, ce qui évite d'annoncer « vous
 * êtes ici » sur une page qu'on vient d'ouvrir.
 */
export function useActiveSection(sections: string[]): string | null {
  registerSections(sections);
  return useSyncExternalStore(
    subscribe,
    () => active,
    () => null,
  );
}
