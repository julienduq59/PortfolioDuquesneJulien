# Portfolio — Julien Duquesne

Portfolio professionnel de Julien Duquesne, alternant Logistique & Supply Chain (Bac+5 MOPL).

Site statique en HTML / CSS / JavaScript, sans dépendance ni build — il fonctionne en ouvrant simplement `index.html`.

## Structure

```
.
├── index.html          → Accueil
├── a-propos.html       → À propos
├── parcours.html       → Parcours (expériences & formation)
├── competences.html    → Compétences
├── realisations.html   → Réalisations / projets
├── contact.html        → Contact
└── assets/
    ├── styles.css      → Tous les styles
    ├── site.js         → Navigation, footer, animations, compteurs
    ├── image-slot.js   → Composant d'image
    ├── photo-julien.jpg
    ├── badminton-action.jpg
    ├── badminton-team.jpg
    ├── projet-excel-reappro.png
    ├── racks-harnais.jpg
    ├── racks-vue.jpg
    └── racks-charge.jpg
```

## Mise en ligne avec GitHub Pages

1. Pousser ces fichiers à la racine du dépôt `PortfolioDuquesneJulien`.
2. Dans le dépôt : **Settings → Pages**.
3. Source : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Le site sera disponible à l'adresse `https://<utilisateur>.github.io/PortfolioDuquesneJulien/`.

## À compléter

- **CV** : ajouter le fichier `assets/cv-julien-duquesne.pdf` pour activer le bouton « Télécharger mon CV ».
- **LinkedIn** : remplacer le lien `#` par l'URL réelle dans `assets/site.js` (pied de page) et `contact.html`.
