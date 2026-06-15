/* =================================================================
   PORTFOLIO — JULIEN DUQUESNE · comportements partagés
   ================================================================= */
(function () {
  "use strict";

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
  window.JD.applyTheme = function (n) { applyTheme(n); localStorage.setItem("jd_theme", n); };

  /* ---------- Injection nav ---------- */
  function buildNav() {
    var mount = document.querySelector("[data-nav]");
    if (!mount) return;
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
        '<button class="nav__burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div>';

    var burger = mount.querySelector(".nav__burger");
    burger.addEventListener("click", function () { mount.classList.toggle("is-open"); });
    mount.querySelectorAll(".nav__link").forEach(function (l) {
      l.addEventListener("click", function () { mount.classList.remove("is-open"); });
    });

    function onScroll() {
      if (window.scrollY > 24) mount.classList.add("is-solid");
      else mount.classList.remove("is-solid");
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
            '<p>Bac+5 MOPL — ISTELI Wasquehal</p>' +
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
          '<span>Portfolio — Logistique & Supply Chain</span>' +
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

  function initAll() {
    buildNav();
    buildFooter();
    initScrollProgress();
    initAutoStagger();   /* avant initReveal pour que les nouveaux [data-reveal] soient observés */
    initReveal();
    initCounters();
    initGauges();
    initSkillDots();
    initForm();
    initParallax();
    initHeroFloat();
    buildTweaks();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
