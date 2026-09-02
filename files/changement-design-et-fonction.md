# Changements Design et Fonction — Portfolio Taha Ghadhab

## 0. Contexte

Deux documents d'inspiration ont été fournis :
1. Une liste de tendances web créatives 2025 (3D interactif, storytelling immersif, typographie cinétique, grilles asymétriques, chromatisme dynamique)
2. Un "cahier des charges" très ambitieux orienté secteur luxe/agence créative, avec des références à des studios (Pioneer, Illusion, Mammut, KPR...) et une mise en scène finale façon "trou noir cosmique + astronaute qui sort de l'écran"

**Position de départ, à garder en tête** : ces deux documents décrivent un register visé plutôt vers des marques de luxe, studios créatifs ou produits grand public — pas vers un portfolio d'ingénieur destiné à des recruteurs pressés. Je ne vais donc pas tout importer tel quel. Le but ici est de piocher ce qui **sert** le concept cockpit/chaîne de montage déjà validé, et d'écarter clairement ce qui le dessert ou contredit nos garde-fous (mode double, mobile-first, pas de gadget qui mange le fond).

---

## 1. Éléments retenus et adaptés à notre concept

### 1.1 Objet 3D signature qui persiste au scroll
**Idée d'origine** : un objet 3D central qui suit l'utilisateur de section en section.
**Adaptation retenue** : au lieu d'un objet abstrait "logo", ce sera un **élément d'instrument de cockpit** (ex. une jauge ou un petit HUD circulaire) qui reste visible en coin d'écran et qui évolue selon la section active — par exemple il affiche "STATUS: EXPÉRIENCES" puis "STATUS: PROJETS". Ça renforce la métaphore existante au lieu d'ajouter un objet hors-sujet.
**Pourquoi ça marche ici** : ça donne de la continuité et un fil conducteur sans dénaturer le thème technique.

### 1.2 Parallaxe à 3 couches sur les cartes de projet
**Idée d'origine** : premier plan / plan moyen / arrière-plan qui bougent à vitesses différentes au survol.
**Adaptation retenue** : appliqué au **mur d'écrans de projets**. Chaque "moniteur" a une légère profondeur : le cadre de l'écran (premier plan), le contenu/visuel du projet (plan moyen), et un léger effet de reflet ou de grille en arrière-plan. Discret, pas exagéré.
**Pourquoi ça marche ici** : ça ajoute de la richesse visuelle à une section qui pourrait sinon sembler plate, sans complexité excessive.

### 1.3 Ligne animée qui relie les sections ("stroke line")
**Idée d'origine** : une ligne qui guide l'œil d'une section à l'autre.
**Adaptation retenue** : cohérent avec la **chaîne de montage** déjà prévue — le convoyeur EST cette ligne. On peut l'étendre discrètement pour qu'elle relie aussi visuellement les autres sections (comme un câble ou un circuit qui traverse la page en fond, façon schéma électrique).
**Pourquoi ça marche ici** : ça ne s'ajoute pas au concept, ça le renforce — c'est littéralement la même idée que la chaîne de montage.

### 1.4 Mutation chromatique selon le contexte
**Idée d'origine** : les couleurs de l'interface changent selon le projet survolé.
**Adaptation retenue** : quand on survole un projet (PharmacoWork, Machine Layout, Dashboard ENIB), l'accent cyan/ambre peut légèrement pencher vers une nuance associée à ce projet (ex. une teinte plus verte pour PharmacoWork/santé, une teinte plus orange industrielle pour Machine Layout). **Changement léger, jamais un changement de fond complet.**
**Pourquoi ça marche ici** : ça personnalise chaque projet sans casser la cohérence anthracite/ambre/cyan du design system.

### 1.5 Effet de "randomisation" du texte au survol des liens de nav
**Idée d'origine** : les caractères se mélangent avant de se stabiliser.
**Adaptation retenue** : renommé en "décodage système" — cohérent avec l'univers cockpit/informatique : au survol d'un lien de navigation, le texte apparaît une fraction de seconde comme des caractères qui se "chargent" (façon terminal) avant de se stabiliser sur le mot final. Très bref (200-300ms), jamais répété en boucle.
**Pourquoi ça marche ici** : ça colle à l'univers "système" sans être un gadget purement esthétique random.

### 1.6 En-tête persistant, transitions sans rechargement
**Idée d'origine** : un menu qui ne disparaît jamais, navigation fluide type SPA.
**Adaptation retenue** : conservé tel quel — c'est déjà cohérent avec le panneau de contrôle fixe prévu dans notre concept. Bonne pratique technique de toute façon (React/SPA).

### 1.7 Cartes/fenêtres qui s'étendent en plein écran au clic
**Idée d'origine** : les fenêtres de contenu s'agrandissent en pleine largeur.
**Adaptation retenue** : déjà prévu pour le mur d'écrans de projets — un clic sur un moniteur l'agrandit en plein cadre pour le détail. Confirmé, pas de changement nécessaire, juste validé par cette référence.

### 1.8 Présentation "pas-à-pas" d'un projet au scroll
**Idée d'origine** : un déroulé façon "unboxing" qui montre les étapes d'un projet.
**Adaptation retenue** : pour un ou deux projets clés (ex. Machine Layout Optimization App), montrer une **mini-séquence en 3-4 étapes** au scroll : problème identifié → méthode appliquée (King/ROC) → résultat obtenu, façon inspection technique plutôt que "déballage produit".
**Pourquoi ça marche ici** : ça correspond exactement à la méthode de travail de Taha (identifier → outiller → mesurer le gain), donc ça raconte quelque chose de vrai plutôt qu'un effet gratuit.

---

## 2. Éléments écartés (et pourquoi)

| Élément proposé | Pourquoi on l'écarte |
|---|---|
| Transition finale "trou noir cosmique" + astronaute qui sort de l'écran | Hors-sujet total par rapport à un profil ingénierie/industrie. Casserait la crédibilité technique recherchée auprès de recruteurs. Risque fort de sembler gadget/hors-propos. |
| Typographie calligraphique "élégance/héritage/luxe" | Contredit directement la personnalité "technique & précise" validée plus tôt. Le luxe n'est pas le positionnement de Taha. |
| Design sonore systématique sur chaque interaction de menu | Risque d'être intrusif pour un recruteur qui consulte le site au bureau ou en public ; complexifie aussi le développement pour un gain limité. Écarté par défaut, éventuellement une option "son" désactivée par défaut si on veut le garder plus tard. |
| Grille totalement asymétrique et libre, "sans motif" | Va à l'encontre de la clarté et de la scannabilité recherchées pour un recruteur pressé. Notre grille reste technique (façon blueprint), pas artistique-chaotique. |
| Déformation "caoutchouc" (squash and stretch) proportionnelle à la vitesse de scroll | Effet ludique/ludique-enfantin qui contredit l'esprit "précision d'ingénieur/aéronautique". Risque de paraître non sérieux. |
| Pixel art comme détail UI | Référence gaming/rétro qui ne colle pas à l'univers cockpit/industrie sérieux. |
| Cercles "dessinés à la main" autour des mots clés | Signature artisanale/illustrateur, pas cohérente avec un profil ingénieur technique. |
| Texte rotatif circulaire décoratif | Joli sur un site créatif/luxe, mais n'apporte rien à la lisibilité d'un CV interactif ; risque de distraire sans raison fonctionnelle. |
| Effet "light shine" sur des avatars 3D façon carte de profil premium | Pas de justification claire ici (pas une équipe à présenter) ; complexité de développement disproportionnée par rapport au bénéfice. |

**Principe général de tri appliqué** : un effet est retenu seulement s'il **raconte quelque chose de vrai sur le profil de Taha** ou **améliore la lisibilité/l'expérience**. S'il est seulement "impressionnant" sans lien avec le fond, il est écarté — conformément aux garde-fous déjà validés (la forme ne doit pas manger le fond).

---

## 3. Nouveautés fonctionnelles à intégrer au concept

Ajouts concrets à la structure définie dans `concept-portfolio-taha.md` :

1. **Indicateur de statut persistant** (section 1.1) — mini-HUD fixe qui indique la section active, visible en permanence
2. **Profondeur légère sur le mur d'écrans de projets** (section 1.2) — 2-3 couches maximum, jamais surchargé
3. **Circuit/câble visuel discret en fond de page** qui relie symboliquement les sections (section 1.3), en plus de la chaîne de montage déjà prévue pour les expériences
4. **Teinte d'accent qui varie légèrement par projet** au survol (section 1.4), toujours dans la palette anthracite/ambre/cyan
5. **Effet "décodage système"** bref sur les liens de navigation au survol (section 1.5)
6. **Mini-séquence en étapes** pour 1-2 projets phares, façon inspection technique plutôt que storytelling produit (section 1.8)

Ces ajouts restent **secondaires et discrets** — ils viennent enrichir le concept déjà validé, pas le remplacer. Le mode double (vue classique), le CV PDF toujours accessible, le mobile-first et le boot court restent la priorité absolue et ne sont pas remis en question par ce document.

---

## 4. Impact sur le design system

À reporter dans `design-system-portfolio-taha.md` lors de la prochaine mise à jour :
- Ajouter une règle de variation chromatique **limitée** (teinte d'accent seulement, jamais changement de fond complet) — pour rester cohérent avec la règle "deux couleurs d'accent maximum visibles à l'écran"
- Documenter l'effet "décodage système" dans la section animations/micro-interactions, avec la même contrainte de durée courte (200-300ms) que le reste
- Ajouter une note explicite : **son désactivé par défaut**, à activer manuellement si implémenté un jour

Aucun changement sur la palette de couleurs, la typographie de base, le boot d'ouverture, ou les garde-fous d'accessibilité déjà définis — ces fondations restent valables.
