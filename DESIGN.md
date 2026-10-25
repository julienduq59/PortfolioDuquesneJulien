---
name: Julien Duquesne · Portfolio
description: Une étiquette d'expédition blanche collée sur du carton kraft — le portfolio comme un colis prêt à partir.
colors:
  kraft: "#C29563"
  kraft-2: "#B3844F"
  kraft-deep: "#4A3420"
  kraft-night: "#2A2016"
  kraft-night-2: "#231A11"
  kraft-night-deep: "#17110B"
  label: "#FFFFFF"
  ink: "#141210"
  ink-soft-kraft: "#2A1F14"
  ink-soft-label: "#2B2620"
  muted-label: "#555049"
  row-hover: "#F4EEE4"
  red: "#C21F15"
  red-hover: "#9E170F"
  on-red: "#FFFFFF"
  night-ink: "#F2E8DA"
  night-ink-soft: "#E6D8C3"
  night-muted: "#CBB89D"
  tape-ink: "#3A2814"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 1.8rem + 5vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 1.7rem + 3.4vw, 4.3rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.5rem + 2vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.18rem, 1.08rem + 0.5vw, 1.42rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1"
  label-bar:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
  label-key:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  button:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 800
    letterSpacing: "0.05em"
rounded:
  none: "0"
spacing:
  rule: "3px"
  rule-small: "2px"
  gutter: "clamp(1.1rem, 5vw, 4rem)"
  sheet-pad: "clamp(1.1rem, 2.8vw, 1.9rem)"
  row-pad: "clamp(0.9rem, 2.2vw, 1.3rem) clamp(1rem, 2.4vw, 1.6rem)"
  section: "clamp(3rem, 7vw, 6rem)"
  maxw: "1200px"
  nav-h: "66px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.65em 1.25em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.red-hover}"
    textColor: "{colors.on-red}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.65em 1.25em"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
  sheet:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet-pad}"
  sheet-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    typography: "{typography.label-bar}"
    padding: "0.5rem 0.85rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.28em 0.55em"
  chip-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    rounded: "{rounded.none}"
    padding: "0.28em 0.55em"
  date-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    padding: "0.3rem 0.6rem"
  badge-cdd:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.label}"
    padding: "0.35rem 0.7rem"
  badge-alternance:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    padding: "0.35rem 0.7rem"
  badge-stage:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.ink}"
    padding: "0.35rem 0.7rem"
  badge-interim:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    padding: "0.35rem 0.7rem"
  pouch-header:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    padding: "0.35rem 0"
---

# Design System: Julien Duquesne · Portfolio

## Overview

**Creative North Star: "L'étiquette d'expédition"**

Chaque page est une étiquette logistique blanche collée sur du carton kraft. Le carton est le sol : une teinte kraft unie, sur laquelle une texture de fibres en niveaux de gris est fusionnée en `soft-light`. Les étiquettes sont du papier blanc cerné d'un bord noir de 3 px et découpé en zones par des filets noirs de 3 px, comme un bordereau qu'on lit d'un coup d'œil sur un quai. Les clés de champ sont en petites capitales grises, les valeurs en Bricolage Grotesque très gras.

Le système est dense et franc : angles vifs, aucun dégradé, aucun arrondi, un seul rouge réservé à l'action. Les matériaux physiques (carton, pochette plastique, adhésif) sont des rasters générés et posés en surimpression ; tout le reste est du CSS plat. Le thème sombre éteint la lumière sur le carton (brun très foncé) sans toucher aux étiquettes : le papier reste blanc, l'encre reste noire.

La page d'accueil porte l'objet signature : une grande étiquette d'expédition légèrement de travers (expéditeur, département, destination, contenu, champs chiffrés, code-barres réel de l'adresse email), accompagnée de la photo glissée dans une pochette « Documents ci-joints ». Les pages intérieures reprennent la même grammaire en étiquettes de section droites.

**Key Characteristics:**
- Sol en carton kraft fibreux, étiquettes en papier blanc à bord noir 3 px.
- Zones réglées : les cellules sont séparées par des filets, jamais par des espaces.
- Une seule famille typographique, très grasse, capitales pour les titres d'objets et les clés.
- Rouge d'expédition réservé à l'action ; tout le reste est noir, blanc et kraft.
- Rayon zéro partout ; ombres douces uniquement sous les objets posés sur le carton.
- Thème sombre : le carton fonce, les étiquettes ne changent pas.

## Colors

Une palette d'emballage : carton kraft, papier blanc, encre noire chaude, et un rouge d'expédition.

### Primary
- **Rouge d'expédition** (`red`) : boutons d'action principaux, contour de focus, survol des titres de lignes cliquables, survol du bouton « retour en haut », fond du panneau d'action de la page Contact, et bandeau « Documents ci-joints » de la pochette. Survol : **Rouge d'expédition foncé** (`red-hover`). Texte posé dessus : blanc (`on-red`).

### Neutral
- **Carton kraft** (`kraft`) : le sol de toutes les pages en thème clair, sous la texture `kraft-fibres.webp`. Sert aussi de fond au badge « Stage ».
- **Kraft ombré** (`kraft-2`) : piste de la barre de défilement.
- **Carton foncé** (`kraft-deep`) : bandes sombres (`.section--dark`) et pied de page en thème clair.
- **Carton de nuit** (`kraft-night`, `kraft-night-2`, `kraft-night-deep`) : les trois mêmes rôles en thème sombre.
- **Papier d'étiquette** (`label`) : fond de toute étiquette, carte, ligne de bordereau, tableau et bouton de copie, dans les deux thèmes.
- **Encre** (`ink`) : texte sur papier, bords et filets de 3 px, barres d'en-tête, pastilles pleines, cases de niveau remplies, sélection de texte.
- **Encre douce sur carton** (`ink-soft-kraft`) : texte secondaire et clés posés directement sur le kraft clair.
- **Encre douce sur papier** (`ink-soft-label`) et **Gris de clé** (`muted-label`) : texte courant secondaire et clés de champ à l'intérieur des étiquettes.
- **Papier froissé** (`row-hover`) : survol des lignes du bordereau de navigation.
- **Encre de nuit** (`night-ink`, `night-ink-soft`, `night-muted`) : texte, filets et clés posés sur le carton foncé ; `night-ink` sert aussi de couleur de focus en thème sombre et de barre d'en-tête claire hors étiquette.
- **Encre d'adhésif** (`tape-ink`) : texte imprimé sur le ruban du pied de page.

### Named Rules
**La règle du rouge d'expédition.** Le rouge signifie « agir ». Il est réservé aux boutons d'action, au focus, aux survols de liens et au seul bandeau de la pochette. Aucun titre, fond de section ou décor n'est rouge.

**La règle du papier constant.** Une étiquette est toujours papier blanc et encre noire, quel que soit le thème ou la bande sur laquelle elle est posée. Seul le carton change de couleur.

**La règle des couleurs d'étiquette.** Les états et catégories (type de contrat, pastilles) se distinguent uniquement avec les matériaux de l'étiquette : noir plein, contour noir, kraft, contour pointillé. Pas de teinte de catégorie.

## Typography

**Display Font:** Bricolage Grotesque, auto-hébergée, variable 400–800 (avec Helvetica Neue, Arial, sans-serif)
**Body Font:** la même
**Label/Mono Font:** la même ; les chiffres sont tabulaires sur tout le site (`font-variant-numeric: tabular-nums`)

**Character:** Une grotesque d'imprimerie d'étiquettes, compacte et très grasse dans les titres, lisible et neutre dans le texte. Toute la hiérarchie se fait par graisse, taille, casse et interlettrage, jamais par changement de famille.

### Hierarchy
- **Display** (800, `display`, interligne 0.9, capitales) : le titre de page, seul dans son étiquette d'en-tête.
- **Headline** (800, `headline`, interligne 0.95) : titre principal d'une étiquette de section, en casse de phrase.
- **Title** (800, `title`, capitales pour les lignes de bordereau et les expériences) : nom d'une destination, intitulé d'un poste.
- **Title small** (800, `title-sm`) : titres de cellules, de domaines de compétences, d'éléments de formation, valeurs de contact.
- **Lede** (400, `lede`, 56ch max) : chapeau d'une étiquette.
- **Body** (400, `body`, 70ch max) : texte courant.
- **Label bar** (700, 0.95rem, +0.12em, capitales) : texte blanc de la barre noire d'en-tête d'une étiquette.
- **Label key** (700, 0.72rem, +0.14em, capitales, gris) : clés de champ (« Expéditeur », « Destination », « Contenu »), en-têtes de colonne, titres de colonnes du pied de page.
- **Valeurs de champ** (800, très grandes, interlettrage serré −0.03 à −0.04em) : nombres et destination de l'étiquette d'accueil.

### Named Rules
**La règle de la clé et de la valeur.** Une donnée s'écrit en deux temps : une clé minuscule, grise, espacée, en capitales ; puis la valeur en 800, grande. Jamais l'inverse, jamais une clé aussi grasse que sa valeur.

**La règle de la famille unique.** Bricolage Grotesque seule. Pas de serif, pas de monospace, pas de police système en titre.

## Layout

Conteneur centré de `maxw` (1200 px) avec une gouttière fluide (`gutter`). Les sections respirent verticalement (`section`) et chaque section contient en général une seule étiquette pleine largeur. La navigation fixe fait `nav-h` (66 px) ; la première section compense sa hauteur.

À l'intérieur d'une étiquette, le découpage est un quadrillage réglé : les grilles de cellules (`.sheet__cells`, `.sheet-grid`) utilisent un espacement égal à l'épaisseur du filet (`rule`) sur fond noir, ce qui dessine des traits de 3 px entre cellules blanches. Les lignes de bordereau (destinations, expériences, formation) sont des rangées pleine largeur séparées par un filet de 3 px, avec le rembourrage `row-pad`.

L'accueil est une scène à deux colonnes : l'étiquette (fluide) et la pochette photo (200–260 px). Sous 860 px, la pochette passe sous l'étiquette ; sous 640 px, les zones de l'étiquette se réordonnent (expéditeur, destination, code et actions, contenu, champs chiffrés).

Points de rupture observés : 1024 px (navigation en tiroir), 980 / 880 / 860 / 820 / 760 / 720 / 680 / 640 / 560 / 480 px (grilles qui passent à une colonne). Les grilles 2, 3 et 4 colonnes se replient toutes sur une colonne au mobile.

## Elevation & Depth

Le système est plat à l'intérieur des étiquettes : la profondeur vient du matériau, pas des ombres. Seuls les objets physiquement posés sur le carton portent une ombre douce et verticale, comme un papier qui touche une surface. Les étiquettes de section, elles, sont à plat et sans ombre.

### Shadow Vocabulary
- **Étiquette posée** (`box-shadow: 0 12px 18px -10px rgb(0 0 0 / 0.35)`) : la grande étiquette de l'accueil.
- **Tirage photo** (`box-shadow: 0 10px 16px -10px rgb(0 0 0 / 0.35)`) : photos du contenu, encadrées d'un bord blanc de 8 px.
- **Pochette** (`filter: drop-shadow(0 8px 10px rgb(0 0 0 / 0.28))`) : la pochette plastique, ombre qui suit sa silhouette.

### Named Rules
**La règle du papier à plat.** Une étiquette de section n'a jamais d'ombre. L'ombre est réservée à l'objet posé (étiquette d'accueil, pochette, tirage photo) et elle est toujours douce, verticale, sans décalage latéral.

**La règle de l'inclinaison rare.** Trois objets seulement sont de travers : l'étiquette d'accueil (−0.6°), la pochette (1.2°) et le ruban du pied de page (−0.4°). Tout le reste est d'équerre.

## Shapes

Angles vifs partout (`rounded.none`). Les bords sont la forme : 3 px noirs pour toute étiquette, ligne et séparateur structurel ; 2 px pour les petits objets (pastilles, badges de contrat, bouton de copie, cases de niveau) ; 1 px atténué (`line-soft`) seulement pour les subdivisions internes légères (lignes de compétences, liens du tiroir mobile, bas du pied de page). Les puces de liste sont de petits carrés noirs pleins. Le code-barres est un vrai Code 128 de l'adresse email, dessiné en SVG.

## Components

### Buttons
Des boutons d'étiquette : rectangulaires, en capitales, gras.
- **Shape :** angles vifs, bord de 3 px, hauteur minimale 48 px.
- **Primary :** fond `red`, texte blanc, typographie `button`.
- **Hover / Focus :** fond `red-hover` ; la flèche SVG glisse de 3 px vers la droite. Focus : contour de 3 px décalé de 3 px, rouge sur fond clair, noir sur fond rouge, `night-ink` en thème sombre.
- **Ghost :** bord de 3 px à la couleur de l'encre courante, fond transparent ; au survol il se remplit d'encre.
- **Sur le panneau rouge (Contact) :** le primaire s'inverse (fond blanc, texte rouge, survol noir) et le ghost passe en contour blanc.
- **Flèches :** les glyphes → et ↗ du HTML sont remplacés au chargement par des icônes SVG dessinées (trait 2.2, extrémités carrées).

### Chips
- **Style :** capitales 0.8rem en 700, bord de 2 px à l'encre, fond transparent.
- **Accent :** fond noir, texte blanc à l'intérieur des étiquettes.

### Cards / Containers : l'étiquette de section (`.sheet`)
- **Corner Style :** angles vifs.
- **Background :** `label`, encre forcée en noir quel que soit le thème.
- **Shadow Strategy :** aucune (voir la règle du papier à plat).
- **Border :** 3 px `ink`.
- **Header :** une barre noire pleine largeur collée au bord supérieur, texte blanc en `label-bar` ; elle peut porter un intitulé fort à gauche et une mention secondaire à droite.
- **Internal Padding :** `sheet-pad` pour le corps ; cellules en grille réglée (`.sheet__cells`), pied séparé par un filet (`.sheet__foot`), listes de bordereau qui s'enchaînent sous le corps.

### Bordereau (lignes de destination, d'expérience, de formation)
- Rangées pleine largeur séparées par des filets de 3 px, titre en capitales `title`, description grise, flèche à droite.
- Survol (destinations) : fond `row-hover`, titre en rouge.
- Expériences : étiquette de date noire à gauche, poste et organisation au centre, badge de contrat à droite ; détail des missions sous un filet.

### Badges de type de contrat
Capitales 0.85rem 800, bord 2 px noir. **CDD** noir plein ; **Alternance** contour noir sur blanc ; **Stage** fond kraft ; **Intérimaire** contour pointillé sur blanc.

### Navigation
- Barre fixe sur le carton fibreux, filet bas de 3 px. Monogramme « JD » en carré d'encre, nom en 800.
- Liens en capitales 0.92rem 700, `ink-soft` au repos ; survol avec soulignement atténué de 3 px ; page active soulignée d'un filet plein de 3 px.
- Bouton « Me contacter » primaire dans la barre, bascule de thème soleil / lune.
- Sous 1024 px : burger trois barres de 3 px qui se croise en X, tiroir plein écran sur carton avec liens en 1.35rem séparés par des filets de 1 px.

### Étiquette d'expédition (signature, accueil)
Étiquette blanche inclinée (−0.6°), bande noire supérieure, zones réglées : Expéditeur (nom en h1, ville, téléphone) avec le département en très grand à droite ; Destination en capitales géantes avec le poste actuel sur une seule ligne ; Contenu avec puces carrées ; trois champs chiffrés ; zone code avec code-barres réel et les deux boutons. À l'arrivée, l'étiquette se pose (`label-apply`, 0.55 s, `cubic-bezier(.16, 1, .3, 1)`) : elle descend de 10 px en se redressant de −2.4° à −0.6°. C'est la seule animation d'entrée du site ; elle est supprimée en mouvement réduit.

### Pochette « Documents ci-joints »
Photo au format 3:4 glissée sous un film plastique (`pochette.webp`, pleine surface, au-dessus de la photo), inclinée de 1.2°, tenue par un morceau d'adhésif déchiré (`adhesif.webp`) au centre du bord haut. Un bandeau rouge « Documents ci-joints » en capitales 0.66rem 800 coiffe la photo ; une petite étiquette blanche en légende dessous.

### Pied de page
Carton foncé, ouvert par une bande d'adhésif imprimé (`adhesif-bande.webp`, répétée horizontalement, légèrement inclinée, texte `tape-ink` en capitales espacées +0.18em). Appel « Restons en contact. » en `headline` capitales, puis trois colonnes (identité, contact, navigation) sous un filet.

### Tirages photo
Toute photo du contenu porte un bord blanc de 8 px et l'ombre « tirage photo », angles vifs. La visionneuse plein écran les affiche sur un voile d'encre à 94 % avec un bouton de fermeture rouge.

## Do's and Don'ts

### Do:
- **Do** poser chaque section sur une seule étiquette `.sheet` : papier blanc, bord 3 px noir, barre noire d'en-tête collée au bord supérieur.
- **Do** séparer les cellules d'une étiquette par des filets de 3 px (espacement égal à `rule` sur fond noir), jamais par des espaces de carton.
- **Do** écrire chaque donnée en paire clé grise espacée / valeur très grasse.
- **Do** garder le rouge `red` pour l'action ; un seul bouton primaire par zone.
- **Do** laisser les étiquettes blanches et noires dans le thème sombre ; ne foncer que le carton.
- **Do** distinguer les types de contrat par noir plein, contour, kraft et pointillé.
- **Do** composer le sol par `kraft-fibres.webp` (tuile 512 px) en `soft-light` sur la couleur de carton du thème.
- **Do** garder les cibles tactiles à 44 px minimum et neutraliser l'animation de pose en mouvement réduit.

### Don't:
- **Don't** arrondir un angle : rayon 0 partout.
- **Don't** mettre une ombre sous une étiquette de section ni utiliser d'ombre décalée dure ; l'ombre douce est réservée aux objets posés.
- **Don't** incliner autre chose que l'étiquette d'accueil, la pochette et le ruban du pied de page.
- **Don't** faire flotter une barre noire d'en-tête seule sur le carton au-dessus d'un titre : elle n'existe que comme bord supérieur d'une étiquette.
- **Don't** introduire une deuxième famille typographique (serif, monospace ou police système en titre).
- **Don't** colorer une catégorie ou un état avec une teinte hors palette d'étiquette.
- **Don't** utiliser de glyphe Unicode comme icône ; les flèches et pictogrammes sont des SVG dessinés.
- **Don't** ajouter de dégradé ni de second accent coloré.
