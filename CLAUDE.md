# Portfolio de Julien Duquesne

Site statique (HTML/CSS/JS) publié via GitHub Pages depuis la branche `main` :
https://julienduq59.github.io/PortfolioDuquesneJulien/

## Règle absolue

**Ne jamais inventer de données.** Tout contenu ajouté au portfolio ou aux CV doit
provenir de ce que Julien a réellement fourni (documents, messages, contenu déjà en
ligne). En cas de doute sur une information, poser la question plutôt que de combler.

## Julien Duquesne

- Contact : julienduq59@gmail.com · +33 7 81 75 58 79
- LinkedIn : https://www.linkedin.com/in/julien-duquesne-75b246226/
- Permis B + véhicule personnel

### Poste actuel (public)

**Chef de projet logistique · Texdecor · CDD** (depuis 2026). Affiché sur le portfolio
à la demande de Julien : en tête du Parcours, dans l'étiquette d'accueil et dans le JSON-LD.

### Confidentialité

**Ce qui est confidentiel, ce sont les informations internes à Texdecor** : missions et
projets, organisation, noms de collègues ou de responsables, rémunération, détails du
contrat (dates exactes, statut). Ne jamais les publier sur le portfolio, les CV, Canva
ou dans ce dépôt (public, et chaque fichier est servi par GitHub Pages). Seuls le
poste, l'entreprise et le type de contrat sont publics. Les détails sont dans
`.claude/CLAUDE.md`, fichier local non versionné.

### Parcours

- **Depuis 2026** — Chef de projet logistique, Texdecor (CDD)
- **2022–2026** — Logisticien en alternance, LSI (Groupe Delquignies), Leers
- **2021** — Stage opérateur logistique, Proditex, Leers (6 semaines)
- **2021** — Agent logistique (intérim), LSI, Leers

### Formation

- **Juin 2026** — Green Belt Lean, XL Groupe (Répertoire Spécifique n° 6131)
- **2024–2026** — Bac+5 Manager des organisations et processus logistiques (MOPL),
  ISTELI Wasquehal — *diplôme obtenu* (titre officiel RNCP 36218)
- **2021–2024** — BUT Management de la Logistique & des Transports, parcours Connecté,
  IUT de Tourcoing (Université de Lille)
- **Novembre 2023** — CACES 3 · 5 · 6
- **2021** — Baccalauréat, lycée Charles Baudelaire, Roubaix (SES · SVT · maths complémentaires)

## CV

Générés en HTML puis rendus en PDF A4 via Chromium headless (`--print-to-pdf`).

- `assets/cv-julien-duquesne.pdf` — version avec section Portfolio + QR code
- `assets/cv-julien-duquesne-sans-portfolio.pdf` — version sans le lien portfolio
  (hébergée uniquement pour l'import Canva, **non liée** depuis les pages du site)

Contraintes de CV posées par Julien :
- **Pas de chiffres** (aucun résultat chiffré).
- Pas de texte en gras dans la partie LSI.
- Rester sur une seule page A4, bien remplie.
- Power BI retiré du CV (encore présent sur la page Compétences).

Designs Canva correspondants :
- Avec portfolio : https://www.canva.com/d/DAHUPabg3sc
- Sans portfolio : https://www.canva.com/d/eM26ad_kJWIFymA

## Conventions du dépôt

- Pages : `index.html`, `a-propos.html`, `parcours.html`, `competences.html`,
  `realisations.html`, `contact.html`
- Design : monde « Tableau des départs » (refonte Impeccable, octobre 2026). Thème clair =
  affiche jaune des départs, thème sombre = panneau à palettes. Une seule animation
  signature : le nom en palettes sur l'accueil. Produit : `PRODUCT.md`.
- `assets/site.js` injecte la navigation (avec l'horloge), le footer et le JSON-LD,
  anime le nom en palettes et remplace les flèches → ↗ par des icônes SVG.
- Vocabulaire : en logistique on écrit **implantation**, jamais « implémentation ».
- Cache : les pages chargent `assets/styles.css`, `site.js` et `image-slot.js` avec un
  paramètre `?v=AAAAMMJJ` (suffixe `-2`, `-3`… s'il y a plusieurs versions le même jour). **À chaque modification de ces fichiers, mettre à jour la date
  dans toutes les pages**, sinon les visiteurs gardent l'ancienne version en cache.
