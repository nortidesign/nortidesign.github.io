class NortiBanner extends HTMLElement {
  connectedCallback() {
    this.render();
    this.startRotation();
  }

render() {
  const whatsappLink =
    "https://wa.me/5551997142383?text=Olá! Gostaria de conversar sobre um projeto de design.";

  this.innerHTML = `
    <section class="norti-cta-wrapper">
      <div class="norti-cta-banner">
        <div class="norti-cta-container">

          <div class="norti-cta-left">
            <h2>Vamos dar um norti para o seu projeto?</h2>
            <p>Vamos entender a visão da sua marca e criar soluções estratégicas, criativas e que realmente geram destaque.</p>

            <a
              href="${whatsappLink}"
              target="_blank"
              rel="noopener"
              class="norti-cta-button"
            >
              Vamos conversar
            </a>
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
        </div>
      </section>
    `;
  }

  startRotation() {
    const depoimentos = [
      {
        image: "/img/clientes/vanessa-duarte.jpg",
        name: "Vanessa Duarte",
        company: "Danear",
        text: "Felicidade que não cabe no peito! Muito obrigado à <b>Norti Design</b> pelo carinho e dedicação. Nós da Danear só temos a agradecer. Você superou nossas expectativas, um trabalho impecável. Super recomendo, trabalho top! 👏👏👏"
      },
      {
        image: "/img/clientes/carlos-alberto-vieira.jpg",
        name: "Carlos Alberto Vieira",
        company: "JSS Solução Solar",
        text: "Agradeço ao amigo Andrew Padilha, da <b>Norti Design</b>, por concluir minha nova identidade visual com excelência e profissionalismo. Com certeza isso trará mais abrangência e eficácia para alcançar novos clientes."
      },
      {
        image: "/img/clientes/fatima-carneiro.jpg",
        name: "Fátima Carneiro",
        company: "Master Barbearia",
        text: "Sou muito grata por toda a paciência, parceria, carinho e dedicação em produzir nossa marca. Parabéns pelo empenho e profissionalismo. Amei o trabalho e indicarei sempre que tiver oportunidade. Amamos cada detalhe! 🥰"
      },
      {
        image: "/img/clientes/leonardo-lins.jpg",
        name: "Leonardo Lins",
        company: "Lins Hair Estética",
        text: "Pedi para que a <b>Norti Design</b> criasse um logo com conceito, criatividade e identidade única. Minhas expectativas eram altas e foram superadas. O trabalho respeitou toda a história da Lins Hair Estética, que já possui 13 anos. Estamos muito felizes, obrigado mesmo! ❤️🙋🏽‍♀️"
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
      textEl.innerHTML = d.text;
    };

    updateCard();
    setInterval(() => {
      index = (index + 1) % depoimentos.length;
      updateCard();
    }, 5000);
  }
}

customElements.define("norti-banner", NortiBanner);
