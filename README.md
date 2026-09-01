# Portfolio — Taha Ghadhab

Portfolio personnel sur le concept **« salle de contrôle »** : le visiteur ne
consulte pas un CV, il prend les commandes d'un centre de pilotage industriel.

Spécifications de référence dans [`files/`](./files) :

| Fichier | Rôle |
|---|---|
| `concept-portfolio-taha.md` | Concept créatif, arc narratif, garde-fous validés |
| `design-system-portfolio-taha.md` | Palette, typographie, composants, animations |
| `CV_Taha.md` | Source de vérité du contenu |

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — les tokens du design system sont déclarés dans
  `@theme`, au début de `src/app/globals.css`
- Polices via `next/font` : Space Grotesk (titres), Inter (corps),
  JetBrains Mono (données) — trois familles, pas une de plus
- Aucune librairie d'animation : SVG + CSS, avec `IntersectionObserver`

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000 -> redirige vers /fr ou /en
npm run build
npm run start
npm run lint
```

## Structure

```
src/
├── app/
│   ├── [lang]/            # root layout : /fr et /en sont de vraies routes
│   │   ├── layout.tsx     # polices, métadonnées, <html lang>
│   │   ├── page.tsx       # vue cockpit
│   │   └── cv/page.tsx    # vue classique, imprimable en PDF
│   ├── global-not-found.tsx
│   └── globals.css        # tokens du design system
├── components/            # une brique par section
├── content/               # contenu bilingue typé — fr.ts / en.ts
├── lib/cv.ts              # résolution du CV PDF
└── proxy.ts               # négociation de langue sur /
```

### Modifier le contenu

Tout le texte vit dans `src/content/fr.ts` et `src/content/en.ts`. Les deux
fichiers implémentent la même interface `Content` (`src/content/types.ts`) :
si un champ manque dans une langue, le build échoue — les deux versions ne
peuvent pas diverger silencieusement.

### CV PDF

Les boutons « CV » servent le PDF officiel dès qu'il est déposé dans
`public/cv/` (voir le README de ce dossier). Tant qu'il est absent, ils
pointent vers la page imprimable `/[lang]/cv`, dont l'impression navigateur
produit un PDF propre grâce à la feuille `@media print`.

## Contraintes tenues

Les cinq garde-fous validés dans le concept, et où ils sont implémentés :

| Contrainte | Implémentation |
|---|---|
| Mode double obligatoire | `TopBar` — bascule « Vue classique » visible à toutes les largeurs |
| Boot ≤ 2 s, skippable | `BootSequence` — ~1,4 s, clic / Entrée / Échap, une fois par session |
| CV PDF en un clic dès la landing | `Hero`, `TopBar`, `ContactSection` |
| Mobile-first | Toutes les grilles partent d'une colonne ; le convoyeur est vertical par défaut |
| Métaphore sélective | Ni « à propos », ni « contact », ni les soft skills ne passent par le cockpit |

Accessibilité : contrastes AA sur fond sombre, aucune information réservée au
survol, `prefers-reduced-motion` respecté partout, et une règle `<noscript>`
qui rend tout le contenu visible si JavaScript est absent.

## Déploiement — Railway

`railway.json` pointe sur le `Dockerfile` (build multi-étages, sortie
`standalone`). Railway injecte `PORT`, que `server.js` lit automatiquement ;
`HOSTNAME=0.0.0.0` est fixé dans l'image.
