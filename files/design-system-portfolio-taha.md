# Design System — Portfolio "Salle de contrôle"

## 1. Ambiance générale

Esprit **cockpit aéronautique / salle de contrôle industrielle**, précis et technique, jamais gadget. Référence mentale : poste de pilotage d'avion, panneau de contrôle d'usine, écran de supervision industrielle (SCADA) — pas un thème "gaming" ou néon cyberpunk.

Mots-clés : précision, sobriété, technique, confiance, maîtrise.

---

## 2. Palette de couleurs

### Fond
- **Anthracite / graphite** — fond principal (proche noir mais pas noir pur, ex. `#14161A` à `#1B1E24`)
- Variante légèrement plus claire pour les cartes/panneaux (`#20232B`)

### Accents
- **Ambre / orange voyant** — accent d'alerte et d'accroche visuelle (inspiré des voyants aéronautiques), ex. `#F2A93C` à `#D9822B`
  - Utilisé pour : call-to-action, easter egg, éléments à remarquer en priorité
- **Cyan / bleu HUD** — accent data et lecture d'information, ex. `#4FD8E8` à `#2FB8C9`
  - Utilisé pour : chiffres, readouts, données techniques, liens actifs

### Neutres fonctionnels
- Blanc cassé pour le texte principal (`#EDEDE8` environ) — jamais blanc pur sur fond sombre
- Gris moyen pour texte secondaire (`#8A8D94` environ)
- Grille technique en fond, très discrète, façon blueprint (lignes fines, opacité 3-5%)

### Règle d'usage
- Deux couleurs d'accent maximum visibles à l'écran en même temps (ambre + cyan), jamais plus
- Le vert et le rouge sont réservés exclusivement au système "entrée cassée / sortie propre" de la chaîne de montage (signal fonctionnel, pas décoratif)


### Variation chromatique par projet (limitee)
Chaque projet du mur d'ecrans porte une **teinte d'accent propre**, prise dans le voisinage immediat de l'ambre et du cyan :

| Projet | Teinte | Justification |
|---|---|---|
| PharmacoWork | `#4FD8B0` | Cyan incline vers le vert - registre sante/officine |
| Machine Layout | `#F2913C` | Ambre incline vers l'orange industriel |
| Dashboard ENIB | `#4FD8E8` | Cyan de reference |

Contraintes strictes :
- La teinte ne s'applique **qu'au survol**, et **uniquement aux traits** : bordure du moniteur, voyant d'etat, chiffre cle, puces de la fiche detaillee
- **Jamais** de changement de couleur de fond
- Un seul projet etant survole a la fois, la regle "deux accents maximum" reste tenue

---

## 3. Typographie

### Titres / identité
- Police géométrique technique à empattements carrés ou semi-industrielle (esprit Eurostile, Michroma, ou équivalent web-safe comme **Space Grotesk** en alternative plus sobre)
- Toujours en capitales pour les labels de type "instrument" (ex. `EXPÉRIENCES`, `SYSTEM CHECK`)

### Corps de texte
- Police sans-serif neutre et très lisible pour tout le contenu de fond (ex. **Inter**, **IBM Plex Sans**)
- Priorité absolue à la lisibilité — le contenu doit rester scannable même dans l'habillage cockpit

### Données / chiffres
- Police monospace pour tout ce qui est numérique ou "readout" : KPI, dates, coordonnées, compteurs (ex. **JetBrains Mono**, **IBM Plex Mono**)
- Renforce l'effet "instrument de mesure"

### Règles
- Sentence case pour le texte courant, capitales réservées aux éléments d'interface/instrument
- Pas plus de 3 familles de police au total (titres / corps / mono)

---

## 4. Composants visuels clés

### Boutons / interrupteurs
- Style "bouton-poussoir" de panneau de contrôle : bordure fine, léger effet d'enfoncement au clic, pas d'ombre portée décorative
- Feedback au hover : légère lueur ambre ou cyan, jamais de dégradé complexe

### Matrice de competences (remplace les cadrans)
Les cadrans a aiguille ont ete abandonnes : ils affichaient des niveaux auto-attribues sur 100, une precision fausse que rien ne verifie. "75" ne dit rien que "70" ne dirait.

A leur place, une **matrice d'incidence competences x terrains** :
- Lignes = competences, groupees par sous-systeme (Industrielles en ambre, Techniques en cyan)
- Colonnes = terrains d'application, dans l'ordre du recit (experiences puis projets)
- Cellule allumee = competence effectivement mise en oeuvre sur ce terrain
- Compteur de terrains en fin de ligne, en mono
- Reticule croise au survol (ligne + colonne) et afficheur du croisement pointe, facon instrument

Cette forme est empruntee a la **matrice d'incidence de la methode de King** - l'outil meme du projet Machine Layout de Taha. La section se presente donc avec sa propre methode.

Regles :
- Rendu comme un vrai `<table>` avec `scope="row"` / `scope="col"` : le survol n'est qu'une aide visuelle, un lecteur d'ecran parcourt les croisements sans lui
- Une ligne peut rester vide (ex. CATIA V5) - tout n'est pas allume, c'est ce qui rend le reste credible
- Defilement horizontal dans son propre conteneur sur petit ecran
- Une reference vers un terrain inexistant **casse le build**, jamais une ligne silencieusement vide


### Cartes / panneaux
- Fond légèrement plus clair que le fond général, bordure fine 1px
- Coins peu arrondis (esprit boîtier industriel, pas de coins très ronds type app mobile)

### Chaîne de montage (expériences)
- Ligne horizontale continue (le convoyeur) reliant les stations
- Chaque station = un module rectangulaire avec icône représentant le secteur (aéronautique, pétrolier, finance)
- Transition visuelle nette entre "entrée" et "sortie" de chaque station

### Grille de fond
- Grille technique très subtile façon papier millimétré/blueprint, opacité faible, jamais dominante

---

## 5. Animation et micro-interactions

### Principes
- Animations courtes et fonctionnelles, jamais décoratives sans but
- Pas d'animation qui bloque l'accès au contenu au-delà de 1-2 secondes

### Boot d'ouverture
- Durée : 1 à 2 secondes maximum
- Skippable au clic ou à la touche Entrée
- Lignes de diagnostic qui s'affichent rapidement, pas de ralenti artificiel

### Decodage systeme (liens de navigation)
Au survol d'un lien de navigation, le libelle se recompose de gauche a droite comme un terminal qui charge, puis se fige.
- Duree : **260 ms**, jamais rejoue en boucle
- Jeu de glyphes : capitales, chiffres et symboles - registre terminal, pas decoratif
- Le texte reel est rendu cote serveur et **n'est jamais remplace dans l'arbre d'accessibilite** : le brouillage passe par une couche `aria-hidden`, un lecteur d'ecran n'entend que le mot final
- Entierement inerte sous `prefers-reduced-motion`

### Profondeur au survol (mur d'ecrans)
Trois couches se deplacent a des vitesses differentes selon la position du curseur : grille de fond (lente), illustration du projet (moyenne), reflet de dalle (rapide, a contresens).
- Amplitude faible, transition de 220 ms
- Coupe sur ecran tactile (`pointer: coarse`) et sous `prefers-reduced-motion` - la carte reste alors parfaitement plate

### Hover et clics
- Effet "clic d'interrupteur" bref sur les boutons de navigation
- Jauges qui s'animent une seule fois à l'apparition (pas en boucle continue, pour ne pas fatiguer l'œil)
- Effet de "scanline" ou de balayage très subtil, optionnel, jamais scintillant

### Ce qu'on évite
- Pas de glitch effect appuyé, pas de néon clignotant
- Pas d'animations qui rejouent à chaque scroll si l'utilisateur revient en arrière
- Pas d'autoplay sonore
- **Son desactive par defaut** : aucun design sonore n'est implemente. Si l'idee est reprise un jour, elle devra etre opt-in explicite - un recruteur consulte souvent le site au bureau ou en public

---

## 6. Mode double (obligatoire)

- Bouton "Vue classique" toujours visible (position fixe, coin supérieur, contraste garanti)
- Bascule vers une mise en page CV classique : texte scannable, hiérarchie simple, pas d'animation
- Le mode classique garde la palette de couleurs et la typographie de corps de texte, mais retire tout l'habillage cockpit/chaîne de montage
- Le CV PDF est téléchargeable en un clic depuis les deux modes, dès la landing

---

## 7. Responsive / mobile-first

- Construire d'abord la version mobile, puis enrichir pour desktop (pas l'inverse)
- Sur mobile :
  - La chaîne de montage devient un défilement vertical simple (une station par écran)
  - Les cadrans cockpit peuvent être simplifiés en version plus compacte ou remplacés par une liste iconographique claire si l'espace est trop réduit
  - Le mur d'écrans de projets devient une liste verticale de cartes
- Le mode "vue classique" doit être irréprochable sur mobile en priorité — c'est souvent le mode que choisira un recruteur pressé sur téléphone

---

## 8. Accessibilité et lisibilité

- Contraste texte/fond vérifié (WCAG AA minimum) malgré le fond sombre
- Aucune information critique (contact, CV, expériences clés) ne doit être uniquement accessible via une interaction complexe (drag, hover uniquement, etc.)
- Alternative texte pour tout élément graphique porteur d'information (icônes de secteur, jauges)


---

## 9. Instruments persistants

### Mini-HUD de statut
Panneau fixe en bas a gauche, visible en permanence des qu'on quitte le hero.
- Anneau de progression du scroll (cyan) + point central ambre
- Libelle de la section active, en mono capitales
- `aria-hidden` : la navigation reelle reste la barre du haut, le HUD ne doit pas doubler l'annonce des sections

### Bus de circuit
Piste verticale de 1px qui traverse toutes les sections et les relie bout a bout, avec une via cerclee au niveau de chaque en-tete et une derivation vers le titre.
- Masquee sous `xl`, ou la marge disponible est trop mince
- C'est la meme idee que le convoyeur de la chaine de montage, etendue a la page entiere - un renforcement du concept, pas un ajout

---

## 10. Decor de poste de pilotage

Fond fixe traverse par le scroll, qui donne la sensation de se deplacer a
l'interieur de la cabine plutot que de faire glisser une image.

### Les quatre plans
Du plus lointain au plus proche, avec leur course vers le haut sur toute la
hauteur de page :

| Plan | Contenu | Course | Opacite |
|---|---|---|---|
| 1 | Pare-brise : horizon, sol en fuite, reperes lointains | 3vh | 0.55 |
| 2 | Panneau superieur : disjoncteurs, un sur sept arme en ambre | 9vh | 0.50 |
| 3 | Planche de bord : cadrans, ecrans multifonctions, interrupteurs | 18vh | 0.32 |
| 4 | Structure de cabine : montants, casquette, console, manettes | 32vh | 0.60 |

L'effet de profondeur vient de **l'ecart** entre les courses, pas de leur
amplitude. Des courses plus faibles suffisent et evitent que les plans se
vident par le bas.

### Regles de composition
- La structure occupe **les bords** — montants lateraux, casquette en haut,
  console en bas — et laisse la colonne centrale degagee. On est assis dans le
  poste, le contenu flotte dans le champ de vision
- Chaque boite de plan mesure `100vh + course` : sans ca, le bord inferieur
  remonterait dans le viewport en fin de defilement
- Les sections opaques passent en `bg-base-2/70` pour laisser voir le decor
- Attenuation par palier : `opacity-45` sur mobile, `0.75` a partir de `md`,
  pleine opacite a partir de `xl` — sous une certaine largeur, le decor
  encombre plus qu'il n'immerge

### Performance et accessibilite
- Une seule ecriture JS par frame (la variable `--cam`), calee sur
  `requestAnimationFrame` ; tout le reste est du CSS compose sur GPU
- `prefers-reduced-motion` fige la camera a zero : le decor reste, le
  mouvement disparait
- `aria-hidden` et `pointer-events-none` sur toute la couche

### Photo reelle (optionnelle)
Un fichier depose dans `public/cockpit/` est place au plan le plus profond,
desature et assombri a 42 % pour 28 % d'opacite. Voir le README de ce dossier.
Sans fichier, le decor vectoriel fonctionne seul — c'est l'etat par defaut.

