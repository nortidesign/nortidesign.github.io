import { Icons } from "./iconsLibrary.js";

class NortIcons extends HTMLElement {
  static get observedAttributes() {
    return ["name", "size", "color"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name");
    const size = this.getAttribute("size") || "25";
    const color = this.getAttribute("color") || "currentColor";

    const iconPaths = Icons[name];

    if (!iconPaths) {
      console.warn(`Ícone "${name}" não encontrado na biblioteca.`);
      this.innerHTML = "";
      return;
    }

    // Mantém sua lógica original de fill
    const processedPaths = iconPaths.map(p =>
      p.includes("fill=")
        ? p
        : p.replace(/\/>/g, ` fill="currentColor" />`)
    );

    this.innerHTML = `
      <svg 
        width="${size}" 
        height="${size}" 
        viewBox="0 0 25 25" 
        xmlns="http://www.w3.org/2000/svg"
        class="nort-icon"
        fill="${color}"
      >
        ${processedPaths.join("\n")}
      </svg>
    `;
  }
}

customElements.define("norti-icons", NortIcons);
