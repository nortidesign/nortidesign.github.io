class NortiFooter extends HTMLElement {
  connectedCallback() {
    const year = this.getAttribute("year") || new Date().getFullYear();
    const instagram = this.getAttribute("instagram") || "#";
    const linkedin = this.getAttribute("linkedin") || "#";

    // Caminhos absolutos para a raiz do projeto
    const lightLogo = "/img/light-logo-norti-design.png";
    const darkLogo = "/img/dark-logo-norti-design.png";

    this.innerHTML = `
      <footer class="nortiFooter">
        <div class="nortiFooterContainer">

          <a href="/" class="footerLogo">
            <img src="${lightLogo}" alt="Norti Design" id="footer-logo">
          </a>

          <p class="footerCopy">
            © ${year} Norti Design — Todos os direitos reservados.
          </p>

          <div class="footerSocial">
            <a href="${instagram}" target="_blank" aria-label="Instagram">
              <norti-icons name="instagram" size="20"></norti-icons>
            </a>

            <a href="${linkedin}" target="_blank" aria-label="LinkedIn">
              <norti-icons name="linkedin" size="19"></norti-icons>
            </a>
          </div>

        </div>
      </footer>
    `;

    this.updateThemeLogo();
    this.observeThemeChange();
  }

  updateThemeLogo() {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    const logo = this.querySelector("#footer-logo");

    if (logo) {
      logo.src = theme === "light"
        ? "/img/light-logo-norti-design.png"
        : "/img/dark-logo-norti-design.png";
    }
  }

  observeThemeChange() {
    const observer = new MutationObserver(() => this.updateThemeLogo());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }
}

customElements.define("norti-footer", NortiFooter);
