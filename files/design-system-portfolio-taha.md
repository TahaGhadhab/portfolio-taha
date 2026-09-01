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

### Cadrans / jauges (section compétences)
- Cadran circulaire avec aiguille animée
- Graduations fines en gris, aiguille en ambre ou cyan selon la catégorie
- Valeur numérique affichée en mono en dessous ou au centre

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

### Hover et clics
- Effet "clic d'interrupteur" bref sur les boutons de navigation
- Jauges qui s'animent une seule fois à l'apparition (pas en boucle continue, pour ne pas fatiguer l'œil)
- Effet de "scanline" ou de balayage très subtil, optionnel, jamais scintillant

### Ce qu'on évite
- Pas de glitch effect appuyé, pas de néon clignotant
- Pas d'animations qui rejouent à chaque scroll si l'utilisateur revient en arrière
- Pas d'autoplay sonore

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
