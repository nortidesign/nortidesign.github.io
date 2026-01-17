class NortiHeader extends HTMLElement {
  connectedCallback() {
    const logo = this.getAttribute("logo") || "Minha Logo";
    const fixed = this.getAttribute("fixed") === "true";
    const whatsappLink = this.getAttribute("whatsapp") || "https://wa.me/5551997142383";

    // Caminhos absolutos para imagens na pasta img/ da raiz
    const darkLogo = "/img/dark-logo-norti-design.png";
    const lightLogo = "/img/light-logo-norti-design.png";
    const darkSymbol = "/img/dark-symbol-norti-design.png"; 
    const lightSymbol = "/img/light-symbol-norti-design.png";

    this.innerHTML = `
      <header class="nortiHeader ${fixed ? "fixed" : ""}">
        <div class="nortiHeaderContainer">

          <a href="/" class="logo">
            <img src="${lightLogo}" alt="${logo}" id="logo-full">
            <img src="${lightSymbol}" alt="${logo} - Símbolo" id="logo-symbol">
          </a>

          <div class="contentGroup">
            <a href="${whatsappLink}" target="_blank" class="btn-highlight">
              Orçamento
            </a>

            <button id="theme-toggle" class="theme-btn" aria-label="Trocar tema">
              <norti-icons name="moon" size="20"></norti-icons>
            </button>
          </div>
          
        </div>
      </header>
    `;

    this.applySavedTheme();
    this.setupThemeToggle();
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const logoFull = this.querySelector("#logo-full");
    const logoSymbol = this.querySelector("#logo-symbol");
    const icon = this.querySelector("#theme-toggle norti-icons");

    if (logoFull) logoFull.src = savedTheme === "light"
      ? "/img/light-logo-norti-design.png"
      : "/img/dark-logo-norti-design.png";

    if (logoSymbol) logoSymbol.src = savedTheme === "light"
      ? "/img/light-symbol-norti-design.png"
      : "/img/dark-symbol-norti-design.png";

    if (icon) icon.setAttribute("name", savedTheme === "light" ? "moon" : "sun");
  }

  setupThemeToggle() {
    const btn = this.querySelector("#theme-toggle");
    const icon = btn.querySelector("norti-icons");
    const logoFull = this.querySelector("#logo-full");
    const logoSymbol = this.querySelector("#logo-symbol");

    if (!btn || !icon || !logoFull || !logoSymbol) return;

    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", newTheme);

      logoFull.src = newTheme === "light"
        ? "/img/light-logo-norti-design.png"
        : "/img/dark-logo-norti-design.png";
      
      logoSymbol.src = newTheme === "light"
        ? "/img/light-symbol-norti-design.png"
        : "/img/dark-symbol-norti-design.png";

      icon.setAttribute("name", newTheme === "light" ? "moon" : "sun");

      localStorage.setItem("theme", newTheme);
    });
  }
}

customElements.define("norti-header", NortiHeader);
