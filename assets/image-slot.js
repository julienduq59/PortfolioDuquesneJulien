/* =================================================================
   <image-slot> — Web component d'emplacement d'image
   Attributs : src, shape (rounded), radius, placeholder
   Supporte le drag-and-drop pour changer l'image
   ================================================================= */
(function () {
  "use strict";

  class ImageSlot extends HTMLElement {
    constructor() {
      super();
      this._src = null;
    }

    static get observedAttributes() {
      return ["src", "shape", "radius", "placeholder"];
    }

    connectedCallback() {
      this._render();
    }

    attributeChangedCallback() {
      this._render();
    }

    _render() {
      var src = this.getAttribute("src") || "";
      var shape = this.getAttribute("shape") || "";
      var radius = this.getAttribute("radius") || "0";
      var placeholder = this.getAttribute("placeholder") || "Déposez une image ici";

      var borderRadius = shape === "rounded" ? radius + "px" : "0";

      Object.assign(this.style, {
        display: "block",
        position: "relative",
        overflow: "hidden",
        borderRadius: borderRadius,
      });

      if (!this._rendered) {
        this._rendered = true;
        this.innerHTML = "";

        this._img = document.createElement("img");
        Object.assign(this._img.style, {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "opacity .3s",
        });

        this._ph = document.createElement("div");
        Object.assign(this._ph.style, {
          position: "absolute",
          inset: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.78rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--muted, #888)",
          background: "var(--paper-2, #f0ede8)",
          textAlign: "center",
          padding: "1rem",
          pointerEvents: "none",
        });
        this._ph.innerHTML =
          '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
          '<span>' + placeholder + '</span>';

        this.appendChild(this._img);
        this.appendChild(this._ph);

        // Drag-and-drop
        this.addEventListener("dragover", function (e) {
          e.preventDefault();
          this.style.outline = "2px dashed var(--accent, #c2673f)";
        }.bind(this));
        this.addEventListener("dragleave", function () {
          this.style.outline = "";
        }.bind(this));
        this.addEventListener("drop", function (e) {
          e.preventDefault();
          this.style.outline = "";
          var file = e.dataTransfer.files[0];
          if (file && file.type.startsWith("image/")) {
            var reader = new FileReader();
            reader.onload = function (ev) {
              this._setImage(ev.target.result);
            }.bind(this);
            reader.readAsDataURL(file);
          }
        }.bind(this));
      }

      // Update border radius dynamically
      this.style.borderRadius = borderRadius;

      // Update placeholder text
      if (this._ph) {
        var span = this._ph.querySelector("span");
        if (span) span.textContent = placeholder;
      }

      // Load image
      if (src) {
        this._loadImage(src);
      } else {
        this._showPlaceholder();
      }
    }

    _loadImage(src) {
      var img = this._img;
      var ph = this._ph;
      if (!img) return;

      var test = new Image();
      test.onload = function () {
        img.src = src;
        img.style.opacity = "1";
        if (ph) ph.style.display = "none";
      };
      test.onerror = function () {
        img.src = "";
        img.style.opacity = "0";
        if (ph) ph.style.display = "flex";
      };
      test.src = src;
    }

    _setImage(dataUrl) {
      if (this._img) {
        this._img.src = dataUrl;
        this._img.style.opacity = "1";
      }
      if (this._ph) this._ph.style.display = "none";
    }

    _showPlaceholder() {
      if (this._img) { this._img.src = ""; this._img.style.opacity = "0"; }
      if (this._ph) this._ph.style.display = "flex";
    }
  }

  if (!customElements.get("image-slot")) {
    customElements.define("image-slot", ImageSlot);
  }
})();
