import { Fragment, type ElementType } from "react";

interface SplitWordsProps {
  /** La phrase à composer. Elle reste un texte : on ne découpe que sa mise en scène. */
  text: string;
  /** Rang du premier mot dans la chorégraphie du bloc. */
  from?: number;
  /** Pas entre deux mots, en rangs. Un demi-pas resserre une phrase longue. */
  step?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Un titre se lève mot après mot.
 *
 * Chaque mot reçoit son propre cadre de découpe et son rang ; la feuille de
 * style fait le reste. Le découpage se fait au rendu serveur : le balisage
 * livré contient déjà les mots, aucun script ne mesure quoi que ce soit au
 * chargement, et l'hydratation n'a rien à réconcilier.
 *
 * Les espaces restent des nœuds de texte entre deux `inline-block` : le
 * navigateur coupe les lignes exactement où il les aurait coupées sans nous.
 * Un lecteur d'écran lit la phrase d'un trait — le texte n'est pas fragmenté
 * par des éléments porteurs de sémantique.
 *
 * Au-delà d'une vingtaine de mots, l'effet cesse d'être une entrée et devient
 * une attente : on rend alors la phrase telle quelle.
 */
export function SplitWords({
  text,
  from = 0,
  step = 1,
  as: As = "span",
  className,
}: SplitWordsProps) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length > 20) return <As className={className}>{text}</As>;

  return (
    <As className={className}>
      {words.map((word, i) => (
        <Fragment key={`${i}-${word}`}>
          {i > 0 ? " " : null}
          <span className="w">
            <span
              className="wi"
              style={{ "--i": from + i * step } as React.CSSProperties}
            >
              {word}
            </span>
          </span>
        </Fragment>
      ))}
    </As>
  );
}
