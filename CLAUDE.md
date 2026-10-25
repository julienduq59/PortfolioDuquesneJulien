# Portfolio de Julien Duquesne

Site statique (HTML/CSS/JS) publié via GitHub Pages depuis la branche `main` :
https://julienduq59.github.io/PortfolioDuquesneJulien/

## Langue

**Toujours répondre à Julien en français** : messages, questions, descriptions des
commandes et des outils, commits. Aucun texte en anglais visible par Julien.

## Règle absolue

**Ne jamais inventer de données.** Tout contenu ajouté au portfolio ou aux CV doit
provenir de ce que Julien a réellement fourni (documents, messages, contenu déjà en
ligne). En cas de doute sur une information, poser la question plutôt que de combler.

## Julien Duquesne

- Contact : julienduq59@gmail.com · +33 7 81 75 58 79
- LinkedIn : https://www.linkedin.com/in/julien-duquesne-75b246226/
- Permis B + véhicule personnel

### Poste actuel (public)

**Chef de projet logistique · Texdecor · CDD · sept. 2026 – mars 2027**, avec des missions
génériques (choix de Julien, 25/10/2026) : pilotage de projets de déménagement et de transfert
d'activités logistiques ; coordination des équipes internes et des prestataires ; continuité
de service et fiabilité des stocks pendant les transitions ; suivi des indicateurs délais,
coûts et qualité. Affiché en tête du Parcours, dans l'étiquette d'accueil, dans le JSON-LD
et sur les deux CV.

### Confidentialité

**Ce qui est confidentiel, ce sont les informations internes à Texdecor** : projets précis
(quels produits ou activités sont transférés, vers quel prestataire), organisation, noms de
collègues ou de responsables, rémunération, statut et organisation du travail. Ne jamais les publier sur le portfolio, les CV, Canva
ou dans ce dépôt (public, et chaque fichier est servi par GitHub Pages). Seuls le
poste, l'entreprise, le type et les dates du contrat et les missions génériques ci-dessus
sont publics. Les détails sont dans
`.claude/CLAUDE.md`, fichier local non versionné.

### Parcours

- **Sept. 2026 – mars 2027** — Chef de projet logistique, Texdecor (CDD)
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
- Power BI retiré du CV et du portfolio (Julien ne le maîtrise pas assez).

Générateur : une seule source HTML produit les deux versions et ajuste l'espacement pour
remplir une page A4 (reconstruit le 25/10/2026 à partir du PDF ; non versionné).

Designs Canva correspondants (importés le 25/10/2026, version chef de projet logistique) :
- Avec portfolio : https://www.canva.com/d/qhF2rvZrnongQvI
- Sans portfolio : https://www.canva.com/d/3r3Rgdju3IXuMWX
Les anciens designs (avant le poste chez Texdecor) sont périmés.

## Conventions du dépôt

- Pages : `index.html`, `a-propos.html`, `parcours.html`, `competences.html`,
  `realisations.html`, `contact.html`
- Design : monde « Étiquette d'expédition » (refonte Impeccable, octobre 2026, direction
  choisie par Julien sur aperçu). Fond carton kraft (texture `assets/materiaux/`), sections
  en étiquettes blanches à bord noir avec barre d'en-tête, rouge réservé à l'action,
  police Bricolage Grotesque auto-hébergée. Système détaillé : `DESIGN.md` ; produit :
  `PRODUCT.md`. Toujours montrer un aperçu à Julien avant de publier une refonte.
- `assets/site.js` injecte la navigation, le pied de page (ruban adhésif imprimé) et le
  JSON-LD, et remplace les flèches → ↗ par des icônes SVG.
- Vocabulaire : en logistique on écrit **implantation**, jamais « implémentation ».
- Cache : les pages chargent `assets/styles.css`, `site.js` et `image-slot.js` avec un
  paramètre `?v=AAAAMMJJ` (suffixe `-2`, `-3`… s'il y a plusieurs versions le même jour). **À chaque modification de ces fichiers, mettre à jour la date
  dans toutes les pages**, sinon les visiteurs gardent l'ancienne version en cache.
