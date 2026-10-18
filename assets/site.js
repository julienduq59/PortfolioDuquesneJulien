/* =================================================================
   PORTFOLIO — JULIEN DUQUESNE · comportements partagés
   ================================================================= */
(function () {
  "use strict";

  /* Empêcher le navigateur de restaurer la position de scroll :
     chaque page s'ouvre bien tout en haut (barre transparente sur le hero) */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  function scrollTop() {
    var html = document.documentElement;
    var prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto"; /* instantané, pas d'animation */
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }
  scrollTop();
  window.addEventListener("load", scrollTop);
  window.JD = window.JD || {};
  window.JD._scrollTop = scrollTop;

  var PAGES = [
    { id: "index",        label: "Accueil",      href: "index.html" },
    { id: "a-propos",     label: "À propos",     href: "a-propos.html" },
    { id: "parcours",     label: "Parcours",     href: "parcours.html" },
    { id: "competences",  label: "Compétences",  href: "competences.html" },
    { id: "realisations", label: "Réalisations", href: "realisations.html" },
    { id: "contact",      label: "Contact",      href: "contact.html" }
  ];

  /* ---------- Thème & accent persistés ---------- */
  var ACCENTS = {
    // -l : fonds clairs, -d : fonds sombres (contraste AA vérifié pour chaque ton)
    argile:  { "--accent-l": "oklch(0.54 0.15 45)",  "--accent-d": "oklch(0.72 0.14 45)",  "--accent-ink-l": "oklch(0.30 0.10 47)", "--accent-ink-d": "oklch(0.86 0.07 45)",  "--accent-soft": "oklch(0.54 0.15 45 / 0.12)" },
    bleu:    { "--accent-l": "oklch(0.52 0.16 255)", "--accent-d": "oklch(0.74 0.12 255)", "--accent-ink-l": "oklch(0.34 0.12 255)", "--accent-ink-d": "oklch(0.88 0.06 255)", "--accent-soft": "oklch(0.52 0.16 255 / 0.12)" },
    foret:   { "--accent-l": "oklch(0.49 0.11 158)", "--accent-d": "oklch(0.74 0.12 158)", "--accent-ink-l": "oklch(0.33 0.09 158)", "--accent-ink-d": "oklch(0.88 0.06 158)", "--accent-soft": "oklch(0.49 0.11 158 / 0.12)" },
    prune:   { "--accent-l": "oklch(0.50 0.16 348)", "--accent-d": "oklch(0.74 0.13 348)", "--accent-ink-l": "oklch(0.34 0.13 348)", "--accent-ink-d": "oklch(0.88 0.06 348)", "--accent-soft": "oklch(0.50 0.16 348 / 0.12)" }
  };
  function applyAccent(name) {
    var a = ACCENTS[name] || ACCENTS.argile;
    for (var k in a) document.documentElement.style.setProperty(k, a[k]);
  }
  function applyTheme(name) {
    if (name === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
  }
  function applyDisplayFont(name) {
    var fonts = {
      "Instrument Serif": '"Instrument Serif", Georgia, serif',
      "Libre Caslon Display": '"Libre Caslon Display", Georgia, serif',
      "Archivo": '"Archivo", system-ui, sans-serif'
    };
    document.documentElement.style.setProperty("--font-display", fonts[name] || fonts["Instrument Serif"]);
  }
  function initTheme() {
    applyTheme(localStorage.getItem("jd_theme") || "light");
  }
  initTheme();
  window.JD = window.JD || {};
  window.JD.applyAccent = function (n) { applyAccent(n); localStorage.setItem("jd_accent", n); };
  window.JD.applyDisplayFont = function (n) { applyDisplayFont(n); localStorage.setItem("jd_font", n); };
  window.JD.applyTheme = function (n) {
    applyTheme(n);
    localStorage.setItem("jd_theme", n);
    /* Mise à jour de theme-color pour la barre du navigateur mobile */
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute("content", n === "dark" ? "#2A2016" : "#C29563");
  };

  /* ---------- Injections <head> dynamiques ---------- */
  (function () {
    /* theme-color : barre du navigateur mobile, alignée sur le bandeau de navigation */
    var tc = document.createElement("meta");
    tc.name = "theme-color";
    tc.content = document.documentElement.getAttribute("data-theme") === "dark" ? "#2A2016" : "#C29563";
    document.head.appendChild(tc);

    /* JSON-LD schema.org/Person */
    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Julien Duquesne",
      "jobTitle": "Chef de projet logistique",
      "worksFor": { "@type": "Organization", "name": "Texdecor" },
      "description": "Diplômé d'un Bac+5 MOPL à l'ISTELI Wasquehal, formé en alternance chez LSI (Groupe Delquignies). Optimisation du stockage et des process logistiques.",
      "email": "julienduq59@gmail.com",
      "telephone": "+33781755879",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lys-lez-Lannoy",
        "addressRegion": "Hauts-de-France",
        "addressCountry": "FR"
      },
      "sameAs": ["https://www.linkedin.com/in/julien-duquesne-75b246226/"],
      "url": "https://julienduq59.github.io/PortfolioDuquesneJulien/",
      "image": "https://julienduq59.github.io/PortfolioDuquesneJulien/assets/photo-julien.jpg",
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "ISTELI Wasquehal" },
        { "@type": "EducationalOrganization", "name": "IUT de Tourcoing · Université de Lille" }
      ],
      "knowsAbout": ["Logistique", "Supply Chain", "Gestion d'entrepôt", "Amélioration continue", "WMS", "Excel", "Lean", "Green Belt Lean"]
    });
    document.head.appendChild(ld);
  })();

  /* ---------- Injection nav ---------- */
  function buildNav() {
    var mount = document.querySelector("[data-nav]");
    if (!mount) return;

    /* Skip link accessibilité : navigation clavier */
    var mainEl = document.querySelector("main");
    if (mainEl && !mainEl.id) mainEl.id = "main-content";
    var skip = document.createElement("a");
    skip.href = "#main-content";
    skip.className = "skip-link";
    skip.textContent = "Aller au contenu";
    document.body.insertBefore(skip, document.body.firstChild);
    var current = mount.hasAttribute("data-page") ? mount.getAttribute("data-page") : "index";
    var links = PAGES.map(function (p) {
      return '<a class="nav__link' + (p.id === current ? " is-active" : "") + '" href="' + p.href + '">' + p.label + "</a>";
    }).join("");
    mount.className = "nav";
    mount.innerHTML =
      '<div class="container nav__inner">' +
        '<a class="nav__brand" href="index.html"><span class="mark">JD</span>Julien Duquesne</a>' +
        '<nav class="nav__links">' + links +
          '<a class="btn btn--primary nav__cta" href="contact.html">Me contacter</a>' +
        '</nav>' +
        '<div class="nav__actions">' +
          '<button class="nav__theme-toggle" aria-label="Basculer le thème" title="Mode clair / sombre">' +
            '<svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>' +
            '<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
          '</button>' +
          '<button class="nav__burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>';

    var themeToggle = mount.querySelector(".nav__theme-toggle");
    function syncThemeToggle() {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      themeToggle.setAttribute("aria-label", dark ? "Passer en mode clair" : "Passer en mode sombre");
      themeToggle.classList.toggle("is-dark", dark);
    }
    syncThemeToggle();
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      window.JD.applyTheme(current);
      syncThemeToggle();
    });

    var burger = mount.querySelector(".nav__burger");
    burger.addEventListener("click", function () {
      var opening = !mount.classList.contains("is-open");
      mount.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", opening ? "true" : "false");
    });
    mount.querySelectorAll(".nav__link").forEach(function (l) {
      l.addEventListener("click", function () {
        mount.classList.remove("is-open");
      });
    });

  }

  /* ---------- Panneau Tweaks (protocole hôte) ---------- */
  function buildTweaks() {
    var accents = [
      { id: "argile", c: "oklch(0.54 0.15 45)" },
      { id: "bleu",   c: "oklch(0.52 0.16 255)" },
      { id: "foret",  c: "oklch(0.49 0.11 158)" },
      { id: "prune",  c: "oklch(0.50 0.16 348)" }
    ];
    var fonts = ["Instrument Serif", "Libre Caslon Display", "Archivo"];
    var fontShort = { "Instrument Serif": "Serif", "Libre Caslon Display": "Caslon", "Archivo": "Sans" };
    var curAccent = localStorage.getItem("jd_accent") || "argile";
    var curFont = localStorage.getItem("jd_font") || "Instrument Serif";
    var curTheme = localStorage.getItem("jd_theme") || "light";

    var panel = document.createElement("div");
    panel.className = "tw-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="tw-head"><h4>Tweaks</h4><button class="tw-close" aria-label="Fermer">✕</button></div>' +
      '<div class="tw-body">' +
        '<div class="tw-group"><span class="tw-label">Couleur d\'accent</span><div class="tw-swatches" data-tw="accent">' +
          accents.map(function (a) { return '<button class="tw-swatch' + (a.id === curAccent ? " is-on" : "") + '" data-val="' + a.id + '" style="background:' + a.c + '" aria-label="' + a.id + '"></button>'; }).join("") +
        '</div></div>' +
        '<div class="tw-group"><span class="tw-label">Police des titres</span><div class="tw-seg" data-tw="font">' +
          fonts.map(function (f) { return '<button class="' + (f === curFont ? "is-on" : "") + '" data-val="' + f + '">' + fontShort[f] + '</button>'; }).join("") +
        '</div></div>' +
        '<div class="tw-group tw-toggle"><span class="tw-label">Mode sombre</span><button class="tw-switch' + (curTheme === "dark" ? " is-on" : "") + '" data-tw="theme" role="switch" aria-label="Mode sombre"></button></div>' +
      '</div>';
    document.body.appendChild(panel);

    panel.querySelectorAll('[data-tw="accent"] .tw-swatch').forEach(function (b) {
      b.addEventListener("click", function () {
        window.JD.applyAccent(b.getAttribute("data-val"));
        panel.querySelectorAll('[data-tw="accent"] .tw-swatch').forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on");
      });
    });
    panel.querySelectorAll('[data-tw="font"] button').forEach(function (b) {
      b.addEventListener("click", function () {
        window.JD.applyDisplayFont(b.getAttribute("data-val"));
        panel.querySelectorAll('[data-tw="font"] button').forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on");
      });
    });
    var sw = panel.querySelector('[data-tw="theme"]');
    sw.addEventListener("click", function () {
      var on = !sw.classList.contains("is-on");
      sw.classList.toggle("is-on", on);
      window.JD.applyTheme(on ? "dark" : "light");
    });

    function close() { panel.hidden = true; window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); }
    panel.querySelector(".tw-close").addEventListener("click", close);

    // Drag panel
    var head = panel.querySelector(".tw-head"), drag = null;
    head.addEventListener("mousedown", function (e) {
      drag = { x: e.clientX, y: e.clientY, r: panel.getBoundingClientRect() };
      e.preventDefault();
    });
    window.addEventListener("mousemove", function (e) {
      if (!drag) return;
      panel.style.left = (drag.r.left + e.clientX - drag.x) + "px";
      panel.style.top = (drag.r.top + e.clientY - drag.y) + "px";
      panel.style.right = "auto";
    });
    window.addEventListener("mouseup", function () { drag = null; });

    window.addEventListener("message", function (e) {
      var t = e && e.data && e.data.type;
      if (t === "__activate_edit_mode") panel.hidden = false;
      else if (t === "__deactivate_edit_mode") panel.hidden = true;
    });
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
  }




  /* ---------- Lien canonique (SEO) ---------- */
  function initCanonical() {
    if (document.querySelector('link[rel="canonical"]')) return;
    var og = document.querySelector('meta[property="og:url"]');
    if (!og) return;
    var link = document.createElement("link");
    link.rel = "canonical";
    link.href = og.getAttribute("content");
    document.head.appendChild(link);
  }

  /* ---------- Bouton « Retour en haut » ---------- */
  function initBackToTop() {
    var btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Retour en haut de la page");
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';
    document.body.appendChild(btn);
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    function onScroll() {
      btn.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Lightbox images ---------- */
  function initLightbox() {
    var imgs = document.querySelectorAll(
      "figure img, a[href$='.png'] img, a[href$='.jpg'] img, a[href$='.jpeg'] img, a[href$='.webp'] img"
    );
    if (!imgs.length) return;

    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Image agrandie");
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Fermer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>' +
      '<img class="lightbox__img" alt="" />';
    document.body.appendChild(box);
    var boxImg = box.querySelector(".lightbox__img");
    var closeBtn = box.querySelector(".lightbox__close");
    var returnFocus = null;

    function open(src, alt) {
      returnFocus = document.activeElement;
      boxImg.src = src;
      boxImg.alt = alt || "";
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function close() {
      if (!box.classList.contains("is-open")) return;
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (returnFocus && returnFocus.focus) returnFocus.focus();
    }
    // Seul contrôle du dialogue : Tab reste sur le bouton Fermer
    box.addEventListener("keydown", function (e) {
      if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
    });
    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    imgs.forEach(function (img) {
      var parentLink = img.closest("a");
      var src = parentLink && /\.(png|jpe?g|webp)$/i.test(parentLink.getAttribute("href") || "")
        ? parentLink.getAttribute("href")
        : img.src;
      img.classList.add("is-zoomable");
      var trigger = parentLink || img;
      if (!parentLink) {
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "button");
        img.setAttribute("aria-label", "Agrandir : " + (img.alt || "image"));
        img.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(src, img.alt); }
        });
      }
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        open(src, img.alt);
      });
    });
  }

  /* ---------- Copier email / téléphone ---------- */
  function initCopyContact() {
    if (!navigator.clipboard) return;
    var rows = document.querySelectorAll(".contact-row[href^='mailto:'], .contact-row[href^='tel:']");
    rows.forEach(function (row) {
      var href = row.getAttribute("href");
      var value = href.replace(/^mailto:/, "").replace(/^tel:/, "");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.setAttribute("aria-label", "Copier");
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(value).then(function () {
          btn.classList.add("is-copied");
          setTimeout(function () { btn.classList.remove("is-copied"); }, 1600);
        });
      });
      btn.setAttribute("aria-label", row.getAttribute("href").indexOf("mailto:") === 0 ? "Copier l'adresse email" : "Copier le numéro de téléphone");
      var wrap = document.createElement("div");
      wrap.className = "contact-copywrap";
      row.parentNode.insertBefore(wrap, row);
      wrap.appendChild(row);
      wrap.appendChild(btn);
    });
  }


  /* ---------- Injection footer ---------- */
  function buildFooter() {
    var mount = document.querySelector("[data-footer]");
    if (!mount) return;
    mount.className = "footer";
    /* La page Contact porte déjà « Restons en contact. » en titre */
    var onContact = /contact\.html$/.test(location.pathname);
    var tapeText = "Logistique · Supply Chain · Amélioration continue";
    mount.innerHTML =
      '<div class="footer__tape" aria-hidden="true">' + new Array(6).join('<span>' + tapeText + '</span>') + '</div>' +
      '<p class="sr-only">' + tapeText + '</p>' +
      '<div class="container">' +
        (onContact ? "" :
          '<div class="footer__gate">' +
            '<a href="contact.html" class="footer__cta">Restons en contact.</a>' +
            '<a class="btn btn--primary" href="contact.html">Me contacter <span class="arrow">→</span></a>' +
          '</div>') +
        '<div class="footer__grid">' +
          '<div class="footer__col">' +
            '<h4>Julien Duquesne</h4>' +
            '<p>Logistique &amp; Supply Chain</p>' +
            '<p>Bac+5 MOPL · ISTELI Wasquehal · Diplômé 2026</p>' +
            '<p>Lys-lez-Lannoy, Hauts-de-France</p>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Contact</h4>' +
            '<a href="mailto:julienduq59@gmail.com">julienduq59@gmail.com</a>' +
            '<a href="tel:+33781755879">07 81 75 58 79</a>' +
            '<a href="https://www.linkedin.com/in/julien-duquesne-75b246226/" target="_blank" rel="noopener">LinkedIn</a>' +
          '</div>' +
          '<div class="footer__col">' +
            '<h4>Navigation</h4>' +
            PAGES.slice(1).map(function (p) { return '<a href="' + p.href + '">' + p.label + "</a>"; }).join("") +
          '</div>' +
        '</div>' +
        '<div class="footer__bottom">' +
          '<span>© ' + new Date().getFullYear() + ' Julien Duquesne</span>' +
          '<span>Portfolio · Logistique & Supply Chain</span>' +
        '</div>' +
      '</div>';
  }

  /* ---------- Flèches : icônes dessinées à la place des glyphes ---------- */
  var ARROWS = {
    "→": '<path d="M4 12h15"/><path d="M13 6l6 6-6 6"/>',
    "↗": '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>'
  };
  function initArrows() {
    document.querySelectorAll(".arrow").forEach(function (el) {
      var ch = el.textContent.trim();
      if (!ARROWS[ch]) return;
      el.setAttribute("aria-hidden", "true");
      el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square" stroke-linejoin="miter">' + ARROWS[ch] + "</svg>";
    });
  }

  function initAll() {
    buildNav();
    buildFooter();
    initArrows();
    initCanonical();
    initBackToTop();
    initLightbox();
    initCopyContact();
    buildTweaks();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
