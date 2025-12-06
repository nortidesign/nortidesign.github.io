class NortiBanner extends HTMLElement {
  connectedCallback() {
    this.render();
    this.startRotation();
  }

  render() {
    this.innerHTML = `
      <section class="norti-cta-banner">
        <div class="norti-cta-container">

          <div class="norti-cta-left">
            <h2>Vamos dar um norti para o seu projeto?</h2>
            <p>Agende uma conversa e vamos entender a visão da sua marca para criar soluções estratégicas, criativas e que realmente geram destaque.</p>

            <button class="norti-cta-button" onclick="window.location.href='/about.html'">
              Agendar call
            </button>
          </div>

          <div class="norti-cta-right">
            <div class="norti-cta-testimonial">

              <img class="testimonial-photo" />

              <div class="testimonial-header">
                <h3 class="testimonial-name"></h3>
                <span class="testimonial-company"></span>
              </div>

              <p class="testimonial-text"></p>

            </div>
          </div>

        </div>
      </section>
    `;
  }

  startRotation() {
    const depoimentos = [
      {
        image: "/img/clientes/norti-client.png",
        name: "Marina Couto",
        company: "Nome da empresa",
        text: "A Norti melhorou completamente nossa identidade visual. Atendimento rápido, criativo e muito profissional."
      },
      {
        image: "/img/clientes/norti-client.png",
        name: "Rodrigo Venturini",
        company: "Nome da empresa",
        text: "O cuidado com os detalhes e a clareza no design fizeram toda a diferença nos nossos materiais."
      },
      {
        image: "/img/clientes/norti-client.png",
        name: "Camila Azevedo",
        company: "Nome da empresa",
        text: "Recomendo 100%. Trabalho impecável, moderno e com entrega dentro do prazo."
      }
    ];

    let index = 0;

    const photoEl = this.querySelector(".testimonial-photo");
    const nameEl = this.querySelector(".testimonial-name");
    const companyEl = this.querySelector(".testimonial-company");
    const textEl = this.querySelector(".testimonial-text");

    const updateCard = () => {
      const d = depoimentos[index];
      photoEl.src = d.image;
      nameEl.textContent = d.name;
      companyEl.textContent = d.company;
      textEl.textContent = d.text;
    };

    updateCard();
    setInterval(() => {
      index = (index + 1) % depoimentos.length;
      updateCard();
    }, 5000);
  }
}

customElements.define("norti-banner", NortiBanner);
