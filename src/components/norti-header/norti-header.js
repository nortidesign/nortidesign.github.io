class NortiHeader extends HTMLElement {
  connectedCallback() {
    const logo = this.getAttribute("logo") || "Minha Logo";
    const fixed = this.getAttribute("fixed") === "true";

    const lightDomContent = Array.from(this.children)
      .map(child => child.outerHTML)
      .join('');

    this.innerHTML = `
      <header class="nortiHeader ${fixed ? "fixed" : ""}">
        <div class="nortiHeaderContainer">
          <div class="logo">
            <img src="img/light-logo-norti-design.png" alt="${logo}" id="logo-img">
          </div>

          <div class="contentGroup">
            <nav class="site-nav">
            <ul class="nav-links">
              ${lightDomContent}
            </ul>
          </nav>

          <button id="theme-toggle" class="theme-btn" aria-label="Trocar tema">
          <norti-icons name="sun" size="20"></norti-icons>
          </button>
          </div>

          <button class="mobile-menu-btn" aria-label="Abrir menu">
            <norti-icons name="menuList" size="20"></norti-icons>
          </button>
        </div>
      </header>
    `;

    this.setupMobileMenu();
    this.applySavedTheme();
    this.setupThemeToggle();
  }

  setupMobileMenu() {
    const menuBtn = this.querySelector(".mobile-menu-btn");
    const nav = this.querySelector(".site-nav");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const logoImg = this.querySelector("#logo-img");
    const icon = this.querySelector("#theme-toggle norti-icons");

    if (logoImg) logoImg.src = savedTheme === "light"
      ? "img/light-logo-norti-design.png"
      : "img/dark-logo-norti-design.png";

    if (icon) icon.setAttribute("name", savedTheme === "light" ? "sun" : "moon");
  }

  setupThemeToggle() {
    const btn = this.querySelector("#theme-toggle");
    const icon = btn.querySelector("norti-icons");
    const logoImg = this.querySelector("#logo-img");

    if (!btn || !icon || !logoImg) return;

    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      // atualiza tema
      document.documentElement.setAttribute("data-theme", newTheme);

      // atualiza logo
      logoImg.src = newTheme === "light"
        ? "img/light-logo-norti-design.png"
        : "img/dark-logo-norti-design.png";

      // alterna ícone
      icon.setAttribute("name", newTheme === "light" ? "sun" : "moon");

      // salva no storage
      localStorage.setItem("theme", newTheme);
    });
  }
}

customElements.define("norti-header", NortiHeader);
