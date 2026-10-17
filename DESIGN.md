---
name: Julien Duquesne · Portfolio
description: Le tableau des départs d'un quai d'expédition — affiche jaune le jour, panneau à palettes la nuit.
colors:
  poster-yellow: "#FFD32A"
  poster-yellow-dense: "#F5C400"
  sheet-white: "#FFFDF4"
  ink: "#141414"
  ink-soft: "#3B3424"
  ink-muted: "#4A4232"
  rule-ink: "rgb(20 20 20 / 0.82)"
  rule-ink-soft: "rgb(20 20 20 / 0.22)"
  signal-red: "#C42A1C"
  signal-red-deep: "#A21F14"
  on-signal: "#FFFDF4"
  board: "#16181A"
  board-deep: "#0F1112"
  board-band: "#1C1F22"
  tile: "#222528"
  tile-top: "#2A2D31"
  tile-raised: "#2B2F33"
  letters: "#F2EEE3"
  letters-soft: "#D8D3C6"
  board-muted: "#A8A396"
  rule-board: "rgb(242 238 227 / 0.16)"
  amber: "#F3B22E"
  board-green: "#4CC38A"
  poster-green: "#1F6E45"
  line-blue: "#0B4EA2"
typography:
  display-flap:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(2.4rem, 0.6rem + 9.5vw, 5.3rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(3rem, 2rem + 5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 3.6vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(1.9rem, 1.5rem + 2vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
  title-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(1.45rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.08
  board-row:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)"
    fontWeight: 500
    lineHeight: 1.2
  lede:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\" 1"
  sign:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.16em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(0.84rem, 0.82rem + 0.1vw, 0.92rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sign: "2px"
  sign-lg: "3px"
  tile: "0.06em"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4.5rem)"
  section: "clamp(3.5rem, 8vw, 7rem)"
  section-tight: "clamp(2rem, 4vw, 3.2rem)"
  stack: "1.4rem"
  stack-sm: "0.9rem"
  container: "1240px"
  nav-height: "64px"
  touch-target: "44px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.on-signal}"
    typography: "{typography.button}"
    rounded: "{rounded.sign}"
    padding: "0.7em 1.35em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-deep}"
    textColor: "{colors.on-signal}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sign}"
    padding: "0.7em 1.35em"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-yellow}"
  station-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-yellow}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "0.55rem 0.9rem"
  station-band-board:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.amber}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "0.55rem 0.9rem"
  field-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  departure-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.letters}"
    rounded: "{rounded.sign}"
    padding: "0.25rem 0.55rem"
  boarding-state:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.sign}"
    padding: "0.35rem 0.75rem"
    height: "44px"
  line-badge-alternance:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-yellow}"
    rounded: "{rounded.sign}"
    padding: "0.3rem 0.7rem"
  line-badge-alternance-board:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
  line-badge-stage:
    backgroundColor: "{colors.line-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sign}"
    padding: "0.3rem 0.7rem"
  line-badge-interim:
    backgroundColor: "{colors.poster-green}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sign}"
    padding: "0.3rem 0.7rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sign}"
    padding: "0.3em 0.6em"
  chip-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.poster-yellow}"
  chip-accent-board:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
  nav-bar:
    backgroundColor: "{colors.board-deep}"
    textColor: "{colors.letters}"
    height: "{spacing.nav-height}"
  nav-clock:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.amber}"
    rounded: "{rounded.sign}"
    padding: "0.2rem 0.55rem"
---

# Design System: Julien Duquesne · Portfolio

## Overview

**Creative North Star: "Le tableau des départs du quai"**

Le site se lit comme la signalétique d'un quai d'expédition. Deux matières seulement, et elles ne se mélangent pas : l'**affiche jaune des départs** (jaune plein, encre noire, tableaux réglés de filets noirs) et le **panneau à palettes** (anthracite, tuiles fendues à l'horizontale, lettres blanc cassé, ambre). Le thème clair est l'affiche ; le thème sombre est le panneau partout. En thème clair, le panneau reste présent là où il a un rôle d'affichage : la barre de navigation, le haut de l'accueil, la bande d'informations, le panneau d'action de Contact et le pied de page.

La structure vient des filets, pas des boîtes. Les listes sont des lignes de tableau séparées par des règles d'encre ; les dates sont des tuiles de palettes ; les sections portent un bandeau de gare. La typographie est celle de la signalétique transport : une condensée (Barlow Condensed) en capitales pour tout ce qui s'affiche, une linéale (Barlow) pour lire, chiffres tabulaires partout. Densité d'horaire : beaucoup d'information alignée, peu de décor.

Une seule couleur agit : le rouge signal, réservé à l'action (contacter, embarquer, télécharger). L'ambre est la couleur d'affichage du panneau. Un seul mouvement d'auteur : le nom défile en palettes à l'arrivée, et se fige si le visiteur demande moins de mouvement.

**Key Characteristics:**
- Deux matières : affiche jaune imprimée et panneau à palettes ; le panneau peut s'inviter dans l'affiche, jamais l'inverse.
- Structure par filets d'encre (3 px en tête de liste, 2 px sous les en-têtes, 1 px entre les lignes), pas de cartes à fond.
- Barlow Condensed en capitales pour l'affichage, Barlow pour le texte, chiffres tabulaires.
- Rouge signal pour l'action, ambre pour la mise en évidence sur le panneau.
- Angles de panneau émaillé : 2 px, jamais d'arrondi doux.
- Un seul mouvement signé (les palettes du nom), désactivé en mouvement réduit.

## Colors

Une palette de signalétique : un jaune d'affiche saturé, une encre presque noire, un anthracite de panneau, et deux couleurs de fonction (rouge d'action, ambre d'affichage) qui ne se remplacent jamais l'une l'autre.

### Primary
- **Rouge signal** (signal-red) : l'action, et rien d'autre. Bouton principal, état « Embarquement » du tableau des départs, lien d'évitement, contour de focus clavier sur l'affiche, `accent-color` du navigateur. Texte blanc cassé dessus (on-signal). Au survol, il fonce en **rouge signal profond** (signal-red-deep).

### Secondary
- **Ambre de panneau** (amber) : la mise en évidence sur le panneau. Dates de départ du tableau, onglet actif de la navigation, horloge, suffixe des chiffres clés, titres de colonnes du pied de page, bandeau de gare en version panneau, pastille de ligne Alternance et pastilles d'accent en thème sombre, contour de focus sur le panneau. Côté code, `--accent` vaut l'encre sur l'affiche et l'ambre sur le panneau : la mise en évidence change de matière, pas de rôle.

### Tertiary
- **Couleurs de ligne** : une couleur par type de contrat, comme une ligne de transport. **Encre sur jaune** (ink / poster-yellow) pour Alternance, **bleu de ligne** (line-blue) pour Stage, **vert de ligne** (poster-green) pour Intérimaire, texte blanc pur sur les deux derniers. Le vert de ligne sert aussi l'état « obtenu » sur l'affiche ; sur le panneau, cet état passe en **vert de panneau** (board-green).

### Neutral
- **Jaune d'affiche** (poster-yellow) : le fond du thème clair. **Jaune dense** (poster-yellow-dense) pour une bande d'affiche plus chargée (section Destinations de l'accueil, piste de la barre de défilement).
- **Feuille blanche** (sheet-white) : surface claire de réserve (`--surface`), la feuille des arrivées.
- **Encre** (ink) : texte, filets, bandeau de gare sur l'affiche, fond du bouton fantôme au survol. **Encre douce** (ink-soft) pour les sous-titres et organismes, **encre atténuée** (ink-muted) pour les libellés et le texte secondaire.
- **Filet d'encre** (rule-ink) et **filet léger** (rule-ink-soft) : règles du tableau, des listes, des niveaux de compétence éteints.
- **Panneau** (board) : fond du thème sombre et des zones panneau. **Panneau profond** (board-deep) : barre de navigation, pied de page, bande d'informations, bouton retour en haut ; toujours bordé de 2 px noir. **Bande de panneau** (board-band) : la bande dense en thème sombre.
- **Tuile** (tile), **haut de tuile** (tile-top), **tuile relevée** (tile-raised) : les palettes. Une palette = moitié haute tile-top, moitié basse tile ; tile-raised sert au survol des commandes du panneau.
- **Lettres** (letters), **lettres douces** (letters-soft), **gris de panneau** (board-muted), **filet de panneau** (rule-board) : texte, texte de chapô, libellés et règles sur le panneau.

### Named Rules
**The Signal Red Rule.** Le rouge signal marque ce qu'on peut faire, jamais ce qu'on veut souligner. Si un élément rouge ne mène nulle part, il n'est pas rouge.

**The Amber Belongs To The Board Rule.** L'ambre ne s'affiche que sur une matière panneau (fond board, tile, board-deep). Sur l'affiche jaune, la mise en évidence est l'encre.

**The Board Scope Rule.** Pour poser du panneau dans l'affiche, on re-scope les jetons (`.section--dark`, `.footer`, `.board-scope`) au lieu de recolorer à la main : à l'intérieur, `--paper`, `--ink`, `--line` et `--accent` deviennent ceux du panneau.

**The Constant Line Rule.** Une couleur de ligne désigne un type de contrat et ne change pas d'une page à l'autre. Seule exception : Alternance passe en ambre sur encre en thème sombre, parce que l'encre disparaîtrait sur le panneau.

## Typography

**Display Font:** Barlow Condensed (avec Arial Narrow, Roboto Condensed, sans-serif), auto-hébergée en 500 / 600 / 700
**Body Font:** Barlow (avec system-ui, -apple-system, Segoe UI, sans-serif), auto-hébergée en 400 / 500 / 600
**Label/Mono Font:** Barlow Condensed (`--font-mono` pointe sur la condensée ; il n'y a pas de chasse fixe)

**Character:** la condensée est la voix du panneau, serrée, en capitales, faite pour être lue de loin ; Barlow en est la version de lecture, même dessin, plus ouverte. Chiffres tabulaires sur tout le corps (`font-variant-numeric: tabular-nums`), pour que les dates s'alignent comme un horaire.

### Hierarchy
L'échelle est fluide, de `--step--1` à `--step-5` (rapport ≈ 1.25, affichage plafonné à 6 rem).
- **Display palettes** (700, display-flap, 1) : le nom sur la page d'accueil, en tuiles, capitales.
- **Display** (700, display, 0.95, capitales) : titre de page ; les pages intérieures le ramènent à `--step-4` avec 16 à 22 ch de large.
- **Headline** (600, headline, 0.98) : titres de section `.h2`, 16 à 22 ch de large, `text-wrap: balance`.
- **Title** (700, title, 1, capitales) : destinations de l'accueil, intitulés de poste du parcours. `.h3` en 600 à la même taille pour les titres de bloc.
- **Title small** (600, title-sm, 1.08) : `.h4`, intitulés de formation, valeurs de contact.
- **Board row** (500, board-row, 1.2) : cellules du tableau des départs.
- **Lede** (400, lede, 1.5) : chapô, 52 à 58 ch.
- **Body** (400, body, 1.6) : texte courant, 70 ch maximum (62 à 75 ch dans les listes du parcours).
- **Sign** (700, 1.05 rem, 0.16em, capitales) : bandeau de gare.
- **Label** (600, label, 0.12 à 0.14em, capitales) : en-têtes de tableau, libellés de champ, états, légendes, pastilles.
- **Button** (600, 1.02 rem, 0.08em, capitales) : boutons et liens de navigation (500 en navigation).

### Named Rules
**The Signage Case Rule.** Tout ce qui s'affiche (titres de tableau, boutons, libellés, états, navigation) est en condensée capitale, interlettrée entre 0.04em et 0.16em. Le texte qu'on lit reste en Barlow, casse normale.

**The Timetable Figures Rule.** Les dates et les nombres sont tabulaires et, quand ils portent une ligne, posés sur une tuile.

## Layout

Conteneur de 1240 px, gouttière fluide (`clamp(1.25rem, 5vw, 4.5rem)`). Sections à `clamp(3.5rem, 8vw, 7rem)` en hauteur, version serrée à `clamp(2rem, 4vw, 3.2rem)` pour les bandes d'information. Rythme vertical par empilement : 1.4 rem (`.stack`) et 0.9 rem (`.stack-sm`).

Le modèle spatial est l'horaire : des lignes pleine largeur alignées sur une colonne de date fixe. Le parcours et la formation utilisent une colonne de date de 10.5 rem puis le contenu ; la ligne d'expérience ajoute une troisième colonne pour la pastille de ligne. Les destinations de l'accueil sont une grille titre / description / flèche. L'accueil pose le tableau des départs à gauche et la photo dans un cadre de quai à droite (`clamp(260px, 26vw, 340px)`).

La navigation fixe fait 64 px ; les pages intérieures décalent leur en-tête d'autant et le ferment par un filet d'encre de 3 px.

Responsive : la navigation passe en tiroir sous 1024 px, l'horloge disparaît sous 1100 px. Les grilles à deux colonnes passent en une colonne entre 880 et 680 px selon le composant ; le cadre photo passe sous le tableau à 900 px. Sous 640 px, le tableau des départs perd son en-tête et chaque ligne devient une grille date / contenu ; la colonne de date du parcours remonte au-dessus de l'intitulé. Toutes les cibles tactiles font au moins 44 px (48 px pour les boutons).

## Elevation & Depth

Le système est plat. `--shadow` vaut `none` et aucune surface ne flotte. La profondeur vient de deux choses propres au monde : le changement de matière (affiche contre panneau, panneau profond bordé de 2 px noir) et le relief des palettes, rendu par des ombres **internes** qui imitent le bord et la fente d'une tuile, jamais par une ombre portée.

### Shadow Vocabulary
- **Bord de palette** (`box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.55)`) : tuiles de date, chiffres clés, palettes du nom (avec `0 0.04em 0 rgb(0 0 0 / 0.6)` sous la tuile).
- **Cadre de quai** (`box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.6)`) : cadre de la photo, bandeau de gare sur le panneau (0.5).
- **Biseau d'horloge** (`box-shadow: inset 0 -1px 0 #000, inset 0 1px 0 rgb(255 255 255 / 0.04)`) : l'horloge de la navigation.

### Named Rules
**The Flat Poster Rule.** Rien ne flotte au-dessus de l'affiche. Le relief n'existe que dans l'épaisseur d'une palette, en ombre interne.

## Shapes

Des angles de panneau émaillé : 2 px partout (boutons, bandeaux, pastilles, tuiles de date, cadre photo, image-slot, champs), 3 px pour les chiffres clés et les grandes images, 0.06em pour les palettes du nom. Aucun arrondi doux, aucune pilule.

Les formes récurrentes sont la **palette** (rectangle partagé en deux tons par une fente horizontale de 0.035em) et le **filet** : 3 px d'encre en tête de liste, de carte et de domaine de compétences, 2 px sous un en-tête de tableau et en séparation de zones panneau, 1 px entre les lignes. Les cartes n'ont pas de fond : une carte est un filet de 3 px et ce qui suit.

Les icônes sont dessinées en SVG, trait de 2 à 2.2 px ; les flèches d'action sont tracées en angles vifs (`stroke-linecap: square`, `stroke-linejoin: miter`) et remplacent au chargement les glyphes → et ↗ écrits dans le HTML.

## Components

### Buttons
Des commandes de quai, nettes et franches.
- **Shape :** angles de panneau (2 px), bordure de 2 px, hauteur minimale de 48 px, libellé en capitales condensées.
- **Primary :** rouge signal, texte blanc cassé, `0.7em 1.35em`. Le seul bouton qui porte l'action : contacter, embarquer, voir une attestation.
- **Hover / Focus :** le primaire fonce en rouge profond ; la flèche glisse de 3 px vers la droite. Focus clavier : contour de 3 px décalé de 3 px, rouge signal sur l'affiche, ambre sur le panneau et la navigation.
- **Ghost :** bordure et texte à l'encre, transparent ; au survol il se remplit d'encre et le texte prend la couleur du fond. Sur le panneau de l'accueil, la bordure passe aux lettres blanc cassé.

### Chips
- **Style :** pastille rectangulaire, bordure de 1.5 px à l'encre, libellé condensé en capitales (`--step--1`). Elles listent des outils et des compétences, sans état.
- **Accent :** fond d'encre sur l'affiche ; ambre sur encre sur le panneau. Réservée à un statut acquis (« Diplôme obtenu »).

### Cards / Containers
- **Corner Style :** aucun, la carte n'a pas de contour.
- **Background :** transparent, toujours.
- **Shadow Strategy :** aucune (voir Elevation & Depth).
- **Border :** un filet d'encre de 3 px en tête, rien d'autre.
- **Internal Padding :** 1.2 rem au-dessus du contenu, 0 sur les côtés. Au survol d'une carte cliquable, le titre se souligne (2 px).

### Inputs / Fields
Le style existe mais aucun formulaire n'est publié : champ sur feuille blanche, bordure d'encre de 2 px, angles de 2 px, libellé condensé en capitales atténuées. Le contact passe par des lignes de coordonnées (libellé, valeur en condensée `--step-2`, bouton de copie de 44 px bordé d'encre qui affiche « Copié »).

### Navigation
Le bandeau du panneau, identique dans les deux thèmes : fond panneau profond, filet noir de 2 px en bas, 64 px de haut. Marque « JD » sur une palette jaune (ambre en thème sombre). Liens en condensée capitale 500, gris de panneau, lettres au survol ; la page active prend les lettres et un trait ambre de 3 px. À droite : bouton primaire « Me contacter », horloge en ambre sur tuile (heure locale du visiteur, rafraîchie toutes les 15 s), bascule clair / sombre en SVG soleil / lune. Sous 1024 px, tiroir déroulant pleine largeur, liens en 1.5 rem séparés par des filets de panneau, lien actif en ambre.

### Bandeau de gare et libellés de champ
Le panneau qui nomme une zone. Bande pleine largeur, angles de 2 px, condensée 700 en capitales interlettrée à 0.16em : encre et jaune sur l'affiche, tuile et ambre sur le panneau. Elle peut porter un nom et une précision alignée à droite (« Arrivées » · rubrique, nom du projet · entreprise). Le bandeau est l'en-tête de sa zone : il remplace un titre de section, il ne se pose pas au-dessus d'un titre qui dit autre chose.

La variante `.kicker--plain` est un **libellé de champ** : sans fond, condensée 600 en capitales, gris atténué, `--step--1`. Elle nomme un bloc de contenu (« Missions & actions », « Contexte », « Résultat ») ou légende une image, comme un en-tête de colonne d'horaire.

### Tableau des départs (composant signature)
Un vrai `<table>` légendé pour les lecteurs d'écran. En-têtes condensés en capitales atténuées sur filet de 2 px, lignes en condensée `--step-1` séparées par des filets légers. Première colonne (départ) en mise en évidence (`--accent`), colonne « Via » atténuée, colonne « État » en capitales : atténuée pour « Terminé », verte pour un acquis, et la ligne courante en **embarquement** : fond tuile, état en bouton rouge signal de 44 px avec flèche. Variante affiche (`.departures--poster`) sur fond jaune, vert de ligne pour les acquis. Sous 640 px, chaque ligne devient une fiche date / contenu.

### Palettes (composant signature)
- **Nom en palettes :** chaque lettre est une tuile (0.78em × 1.12em) à deux tons et fente centrale. À l'arrivée, chaque palette défile depuis une lettre antérieure, au plus une quinzaine de rotations, 62 ms par rotation, départs décalés de 55 ms, compression verticale de 70 ms par changement. Le texte réel reste en `sr-only`. En `prefers-reduced-motion: reduce`, les tuiles s'affichent directement à leur lettre finale.
- **Tuile de date :** la date d'une ligne du parcours posée sur une palette, lettres blanc cassé, 700 en capitales.
- **Chiffre clé :** nombre en palette 700 `--step-3`, suffixe en ambre, libellé condensé en capitales à côté, une information par ligne.

### Pastilles de ligne
Indicateur de type de contrat sur chaque expérience du parcours : Alternance (encre / jaune ; ambre / encre en thème sombre), Stage (bleu de ligne / blanc), Intérimaire (vert de ligne / blanc). Condensée 700 1 rem, interlettrage 0.08em, angles de 2 px, alignée à droite de la ligne.

### Liste des destinations
Navigation de l'accueil en lignes d'horaire : titre condensé 700 en capitales, description atténuée, flèche dessinée de 1.8 rem. Filet de 3 px en tête, 1 px entre les lignes. Au survol, la ligne prend un fond d'accent léger, se décale de 0.8 rem et son titre passe à la couleur d'accent.

### Cadre de quai
La photo dans un cadre de tuile (10 px de marge, filet interne), légende condensée en capitales sous l'image avec une étiquette ambre à droite.

## Do's and Don'ts

### Do:
- **Do** réserver le rouge signal (#C42A1C) aux actions : bouton principal, état Embarquement, focus sur l'affiche.
- **Do** poser l'ambre uniquement sur une matière panneau ; sur le jaune, mettre en évidence à l'encre.
- **Do** introduire du panneau dans l'affiche par re-scope des jetons (`.section--dark`, `.board-scope`), pas par des couleurs codées en dur.
- **Do** structurer par filets : 3 px d'encre en tête de liste, 2 px sous un en-tête, 1 px entre les lignes.
- **Do** écrire tout ce qui s'affiche en Barlow Condensed capitale interlettrée, et lire en Barlow avec chiffres tabulaires.
- **Do** garder les angles à 2 px (3 px pour les grandes images et chiffres clés).
- **Do** utiliser le bandeau de gare comme en-tête d'une zone, et le libellé de champ pour nommer un bloc de contenu.
- **Do** conserver une couleur fixe par type de contrat sur les pastilles de ligne.
- **Do** tenir les cibles tactiles à 44 px minimum et respecter `prefers-reduced-motion` pour tout mouvement.
- **Do** incrémenter le paramètre `?v=` de `styles.css`, `site.js` et `image-slot.js` dans toutes les pages à chaque modification de ces fichiers.

### Don't:
- **Don't** utiliser le rouge signal pour souligner, décorer ou signaler un titre.
- **Don't** mettre de l'ambre ou du texte clair sur le jaune d'affiche.
- **Don't** donner un fond, un contour complet ou une ombre portée à une carte : une carte est un filet de 3 px.
- **Don't** ajouter d'ombre portée ; le seul relief est l'ombre interne des palettes.
- **Don't** empiler un bandeau de gare au-dessus d'un titre de section qui le reformule : le bandeau est l'en-tête, pas un sur-titre.
- **Don't** ajouter un second mouvement signé : les palettes du nom sont le seul mouvement d'auteur ; le reste se limite à des transitions d'état de 0.2 à 0.25 s.
- **Don't** utiliser des glyphes typographiques comme icônes ; les flèches et pictos sont des SVG dessinés.
- **Don't** introduire une police à empattements, une police système d'affichage ou des arrondis doux : ce n'est plus le monde du quai.
