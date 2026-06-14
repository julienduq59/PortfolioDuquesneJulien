/* image-slot — web component pour les images du portfolio */
(function () {
  if (customElements.get("image-slot")) return;

  class ImageSlot extends HTMLElement {
    connectedCallback() {
      this.style.display = "block";
      this.style.overflow = "hidden";
      this.style.position = "relative";
      var src = this.getAttribute("src");
      var placeholder = this.getAttribute("placeholder") || "Image";
      var radius = this.getAttribute("radius");
      if (radius) this.style.borderRadius = radius + "px";

      this._render(src, placeholder);
      this._initDrop(placeholder);
    }

    _render(src, placeholder) {
      this.innerHTML = "";
      if (src) {
        var img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
        img.onerror = () => this._renderPlaceholder(placeholder);
        this.appendChild(img);
      } else {
        this._renderPlaceholder(placeholder);
      }
    }

    _renderPlaceholder(text) {
      this.innerHTML =
        '<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.8rem;padding:1.5rem;text-align:center;background:var(--paper-2,#f0ede6);border:2px dashed var(--line,rgba(0,0,0,.14));box-sizing:border-box;">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.35"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' +
          '<span style="font-family:var(--font-mono,monospace);font-size:0.72rem;letter-spacing:.12em;text-transform:uppercase;opacity:.5;max-width:22ch;">' + text + '</span>' +
        '</div>';
    }

    _initDrop(placeholder) {
      this.addEventListener("dragover", function (e) { e.preventDefault(); });
      this.addEventListener("drop", function (e) {
        e.preventDefault();
        var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
          var reader = new FileReader();
          reader.onload = (ev) => this._render(ev.target.result, placeholder);
          reader.readAsDataURL(file);
        }
      }.bind(this));
    }
  }

  customElements.define("image-slot", ImageSlot);
})();
