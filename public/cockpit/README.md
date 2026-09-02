# Photo de poste de pilotage (optionnelle)

Depose ici une photo de cockpit nommee `flightdeck.webp` (ou `.avif`, `.jpg`,
`.png`). Elle sera automatiquement placee au plan le plus profond du decor,
derriere les quatre couches vectorielles, et suivra le mouvement de camera au
scroll.

La photo est **desaturee, assombrie a 42 % et posee a 28 % d'opacite** : c'est
une matiere de fond, pas une illustration. Sans ce traitement, le texte
perdrait son contraste AA par-dessus.

Sans fichier ici, le decor vectoriel fonctionne seul — c'est l'etat par defaut.

## Ou en trouver

Photos libres de droits, utilisables commercialement, sans attribution requise :

- **Unsplash** (unsplash.com) — chercher `airplane cockpit`, `flight deck`,
  `control room`
- **Pexels** (pexels.com) — memes termes
- **Wikimedia Commons** — verifier la licence image par image, certaines
  exigent une attribution

Choisis une image **sombre et frontale**, prise depuis le siege pilote. Une
photo claire ou en contre-jour ne fonctionnera pas : elle remonterait la
luminosite du fond et casserait la lisibilite.

## Attention

Une photo de cockpit trouvee en ligne ne dit rien de Taha. Le decor vectoriel,
lui, est construit sur mesure et coherent avec le reste du site. La photo est
donc proposee en complement — a essayer, a garder seulement si elle ajoute
vraiment quelque chose.

La resolution se fait au build (`src/lib/cockpit.ts`) : relance un build apres
avoir ajoute le fichier.
