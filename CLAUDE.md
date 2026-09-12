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

### Poste actuel

**Chef de Projet Logistique H/F — Texdecor**, en **CDD du 21/09/2026 au 31/03/2027**.
Statut : technicien. Organisation du travail : forfait jours.
Rattachement hiérarchique : Direction Supply Chain (François Dascotte).
Arrivée le 21 septembre 2026 à 9h00, demander François Dascotte à l'accueil.
Proposition d'embauche confirmée par Léna San Juan (RH Texdecor) le 11/09/2026.
Profil à créer sur la plateforme interne TEXTALENT et pièces administratives à fournir.

**Confidentialité — à respecter strictement :**
- **Ne jamais afficher la rémunération**, nulle part (portfolio, CV, Canva, dépôt).
  Elle n'est volontairement pas consignée ici, le dépôt étant public.
- **Ne rien publier sur ce poste dans le portfolio ni sur les CV pour l'instant.**
  Ces informations sont ici uniquement pour mémoire. Le portfolio reste en l'état
  (« Ouvert aux opportunités ») tant que Julien n'a pas explicitement demandé la mise
  à jour.

Mission : piloter les projets de déménagement d'activités du service logistique, du
diagnostic initial jusqu'à la mise en route sur le nouveau site, en garantissant la
continuité de service, la fiabilité des flux et le respect des délais, coûts et qualité.

Responsabilités clés :
1. Piloter le transfert des accessoires vers le nouveau prestataire logistique
   (cahier des charges, planification, suivi opérationnel).
2. Piloter le déménagement des PAV (Produits d'Aide à la Vente).
3. Coordonner les équipes internes et les prestataires externes.
4. Sécuriser la continuité de service et la fiabilité des stocks en phase de transition.
5. Suivre les indicateurs projet (délais, coûts, qualité) et rendre compte à la
   Direction Supply Chain.

Évolution envisagée : Responsable Logistique / Responsable de site, ou fonction
transverse Supply Chain (amélioration continue, méthodes, planification).

Fiche de poste complète : `.claude/docs/fiche-de-poste-chef-de-projet-logistique-texdecor.xlsx`
(non versionnée — `.claude/` est dans `.gitignore`, le dépôt étant public).

À noter : Texdecor était déjà le client de LSI sur lequel Julien a travaillé en
alternance (réaménagement des allées, plans de stockage validés par LSI et Texdecor).

### Parcours

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
- `assets/site.js` injecte la navigation, le footer et le JSON-LD, et gère les
  animations de révélation (`data-reveal`, IntersectionObserver)
- Vocabulaire : en logistique on écrit **implantation**, jamais « implémentation ».
