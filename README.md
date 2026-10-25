# Portfolio — Julien Duquesne

Portfolio professionnel de Julien Duquesne, chef de projet logistique chez Texdecor (CDD),
diplômé d'un Bac+5 MOPL (Manager des organisations et processus logistiques).

**Site en ligne : https://julienduq59.github.io/PortfolioDuquesneJulien/**

Site statique en HTML / CSS / JavaScript, sans dépendance ni étape de build : il
fonctionne en ouvrant simplement `index.html`.

## Structure

```
.
├── index.html          → Accueil
├── a-propos.html       → À propos
├── parcours.html       → Parcours (expériences & formation)
├── competences.html    → Compétences
├── realisations.html   → Réalisations / projets
├── contact.html        → Contact
├── 404.html            → Page introuvable
├── PRODUCT.md          → À qui s'adresse le site et ce qu'il doit accomplir
├── DESIGN.md           → Système visuel « Étiquette d'expédition »
└── assets/
    ├── styles.css      → Tous les styles
    ├── site.js         → Navigation, pied de page, visionneuse, données structurées
    ├── fonts/          → Bricolage Grotesque (auto-hébergée)
    ├── materiaux/      → Textures du carton, de la pochette et de l'adhésif (WebP)
    ├── *.webp          → Photos (WebP, origine enregistrée dans les fichiers .json voisins)
    ├── cv-julien-duquesne.pdf
    └── fiche-de-poste-chef-de-projet-logistique.pdf
```

## Design

Monde « Étiquette d'expédition » : chaque page est une étiquette logistique collée sur du
carton kraft. Détails dans `DESIGN.md`.

## Mise en ligne

Le site est publié par GitHub Pages depuis la branche `main`, dossier racine. Après chaque
modification de `styles.css` ou `site.js`, mettre à jour le paramètre `?v=` dans toutes les
pages pour que les visiteurs reçoivent la nouvelle version.
