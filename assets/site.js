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
    argile:  { "--accent": "oklch(0.635 0.155 47)",  "--accent-ink": "oklch(0.30 0.10 47)",  "--accent-soft": "oklch(0.635 0.155 47 / 0.12)" },
    bleu:    { "--accent": "oklch(0.58 0.16 255)",   "--accent-ink": "oklch(0.34 0.12 255)", "--accent-soft": "oklch(0.58 0.16 255 / 0.12)" },
    foret:   { "--accent": "oklch(0.55 0.12 158)",   "--accent-ink": "oklch(0.33 0.09 158)", "--accent-soft": "oklch(0.55 0.12 158 / 0.12)" },
    prune:   { "--accent": "oklch(0.52 0.16 348)",   "--accent-ink": "oklch(0.34 0.13 348)", "--accent-soft": "oklch(0.52 0.16 348 / 0.12)" }
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
    applyAccent(localStorage.getItem("jd_accent") || "argile");
    applyTheme(localStorage.getItem("jd_theme") || "light");
    var f = localStorage.getItem("jd_font");
    if (f) applyDisplayFont(f);
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
    if (tc) tc.setAttribute("content", n === "dark" ? "#1e1c19" : "#f7f4ee");
  };

  /* ---------- Injections <head> dynamiques ---------- */
  (function () {
    /* theme-color : barre du navigateur mobile */
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    var tc = document.createElement("meta");
    tc.name = "theme-color";
    tc.content = dark ? "#1e1c19" : "#f7f4ee";
    document.head.appendChild(tc);

    /* JSON-LD schema.org/Person */
    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Julien Duquesne",
      "jobTitle": "Alternant Logistique & Supply Chain",
      "description": "Étudiant en Bac+5 MOPL à l'ISTELI Wasquehal, en alternance chez LSI (Groupe Delquignies). Optimisation du stockage et des process logistiques.",
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
      "knowsAbout": ["Logistique", "Supply Chain", "Gestion d'entrepôt", "Amélioration continue", "WMS", "Excel", "Lean Six Sigma"]
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
    var current = mount.getAttribute("data-page") || "index";
    var onDark = mount.hasAttribute("data-on-dark");
    var links = PAGES.map(function (p) {
      return '<a class="nav__link' + (p.id === current ? " is-active" : "") + '" href="' + p.href + '">' + p.label + "</a>";
    }).join("");
    mount.className = "nav" + (onDark ? " nav--on-dark" : "");
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
          '<button class="nav__burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
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
      /* Quand le menu s'ouvre : forcer is-solid pour que la barre soit
         opaque et les liens sombres, même tout en haut de la page.
         Quand il se ferme : remettre l'état normal selon la position. */
      if (opening) {
        mount.classList.add("is-solid");
      } else {
        if (window.scrollY <= 24) mount.classList.remove("is-solid");
      }
    });
    mount.querySelectorAll(".nav__link").forEach(function (l) {
      l.addEventListener("click", function () {
        mount.classList.remove("is-open");
        if (window.scrollY <= 24) mount.classList.remove("is-solid");
      });
    });

    function onScroll() {
      if (window.scrollY > 24) mount.classList.add("is-solid");
      else if (!mount.classList.contains("is-open")) mount.classList.remove("is-solid");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Injection footer ---------- */
  function buildFooter() {
    var mount = document.querySelector("[data-footer]");
    if (!mount) return;
    mount.className = "footer";
    mount.innerHTML =
      '<div class="container">' +
        '<p class="kicker kicker--plain" style="color:var(--accent)">Logistique · Supply Chain · Amélioration continue</p>' +
        '<a href="contact.html" class="footer__cta" style="display:block;margin-top:1.2rem;max-width:16ch">Restons en contact.</a>' +
        '<div class="footer__grid">' +
          '<div class="footer__col">' +
            '<h4>Julien Duquesne</h4>' +
            '<p>Alternant Logistique &amp; Supply Chain</p>' +
            '<p>Bac+5 MOPL · ISTELI Wasquehal</p>' +
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

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Compteurs animés ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
    var dur = 1500, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = dec ? val.toFixed(dec) : Math.round(val).toLocaleString("fr-FR");
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = dec ? target.toFixed(dec) : Math.round(target).toLocaleString("fr-FR");
    }
    requestAnimationFrame(tick);
  }
  function initCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Jauges ---------- */
  function initGauges() {
    var els = document.querySelectorAll(".gauge__fill[data-level]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.width = en.target.getAttribute("data-level") + "%";
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Formulaire de contact ---------- */
  function initForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var valid = f.value.trim() !== "" && (f.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
        f.closest(".field").classList.toggle("field--error", !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;
      form.style.display = "none";
      document.querySelector("[data-form-success]").hidden = false;
    });
    form.querySelectorAll("[required]").forEach(function (f) {
      f.addEventListener("input", function () { f.closest(".field").classList.remove("field--error"); });
    });
  }

  /* ---------- Panneau Tweaks (protocole hôte) ---------- */
  function buildTweaks() {
    var accents = [
      { id: "argile", c: "oklch(0.635 0.155 47)" },
      { id: "bleu",   c: "oklch(0.58 0.16 255)" },
      { id: "foret",  c: "oklch(0.55 0.12 158)" },
      { id: "prune",  c: "oklch(0.52 0.16 348)" }
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

  /* ---------- Barre de progression de lecture ---------- */
  function initScrollProgress() {
    var bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.appendChild(bar);
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Parallaxe sur les mots fantômes ---------- */
  function initParallax() {
    var ghosts = document.querySelectorAll(".ghost-word");
    if (!ghosts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function update() {
      ghosts.forEach(function (g) {
        var rect = g.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        var center = rect.top + rect.height / 2 - window.innerHeight / 2;
        g.style.transform = "translateY(" + (center * 0.07) + "px)";
      });
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- Cascade automatique des grilles ---------- */
  function initAutoStagger() {
    var grids = document.querySelectorAll(".grid-3, .grid-4, .skill-cat");
    grids.forEach(function (grid) {
      if (grid.hasAttribute("data-reveal")) return;
      Array.prototype.forEach.call(grid.children, function (el, i) {
        if (el.hasAttribute("data-reveal")) return;
        el.setAttribute("data-reveal", "");
        var d = Math.min(i + 1, 4);
        if (d > 0) el.setAttribute("data-reveal-delay", String(d));
      });
    });
  }

  /* ---------- Dots de compétences en cascade ---------- */
  function initSkillDots() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var skillCards = document.querySelectorAll(".skill-cat .card");
    if (!skillCards.length) return;
    skillCards.forEach(function (card) {
      card.querySelectorAll(".skill-line").forEach(function (line) {
        line.classList.add("pre-anim");
        line.querySelectorAll(".lvl i.on").forEach(function (dot) { dot.classList.add("pre-anim"); });
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var lines = en.target.querySelectorAll(".skill-line.pre-anim");
        lines.forEach(function (line, idx) {
          setTimeout(function () {
            line.classList.remove("pre-anim");
            line.querySelectorAll(".lvl i.on.pre-anim").forEach(function (dot, j) {
              setTimeout(function () { dot.classList.remove("pre-anim"); }, j * 80 + 80);
            });
          }, idx * 65);
        });
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    skillCards.forEach(function (c) { io.observe(c); });
  }

  /* ---------- Animation flottante photo hero ---------- */
  function initHeroFloat() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var photo = document.getElementById("photo-hero");
    if (photo) photo.classList.add("anim-float");
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
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Fermer">&times;</button>' +
      '<img class="lightbox__img" alt="" />';
    document.body.appendChild(box);
    var boxImg = box.querySelector(".lightbox__img");
    var closeBtn = box.querySelector(".lightbox__close");

    function open(src, alt) {
      boxImg.src = src;
      boxImg.alt = alt || "";
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
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
      row.appendChild(btn);
    });
  }

  function initAll() {
    buildNav();
    buildFooter();
    initCanonical();
    initScrollProgress();
    initAutoStagger();   /* avant initReveal pour que les nouveaux [data-reveal] soient observés */
    initReveal();
    initCounters();
    initGauges();
    initSkillDots();
    initForm();
    initParallax();
    initHeroFloat();
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
