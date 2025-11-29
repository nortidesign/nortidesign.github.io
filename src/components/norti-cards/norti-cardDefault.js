class NortiCardDefault extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Título";
    const icon = this.getAttribute("icon") || null;

    // guarda o conteúdo interno original do elemento (children/text)
    const content = this.innerHTML.trim();

    this.innerHTML = `
      <div class="norti-cardDefault">
        ${icon ? `<norti-icons name="${icon}" size="32"></norti-icons>` : ""}
        <h3>${title}</h3>
        <div class="norti-cardContent">
          ${content}
        </div>
      </div>
    `;
  }
}

customElements.define("norti-card", NortiCardDefault);
