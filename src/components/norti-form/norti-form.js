class NortiForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Cria link para CSS externo
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/components/norti-form/norti-form.css');


    // HTML do formulário
    const wrapper = document.createElement('div');
    wrapper.classList.add('norti-form-container');
    wrapper.innerHTML = `
      <form id="nortiForm" class="norti-form">
        <div class="form-step active">
          <label>Como podemos te chamar?</label>
          <input type="text" name="nome" required placeholder="Seu nome">
          <button type="button" class="next-btn">Próximo →</button>
        </div>
        <div class="form-step">
          <label>Qual é seu e-mail?</label>
          <input type="email" name="email" required placeholder="email@exemplo.com">
          <button type="button" class="prev-btn">← Voltar</button>
          <button type="button" class="next-btn">Próximo →</button>
        </div>
        <div class="form-step">
          <label>Qual tipo de projeto?</label>
          <select name="tipo" required>
            <option value="">Selecione...</option>
            <option value="website">Website</option>
            <option value="branding">Branding</option>
            <option value="app">App</option>
          </select>
          <button type="button" class="prev-btn">← Voltar</button>
          <button type="button" class="next-btn">Próximo →</button>
        </div>
        <div class="form-step">
          <label>Qual é o seu orçamento?</label>
          <input type="text" name="orcamento" required placeholder="R$">
          <button type="button" class="prev-btn">← Voltar</button>
          <button type="button" class="next-btn">Próximo →</button>
        </div>
        <div class="form-step">
          <label>Descreva o projeto</label>
          <textarea name="descricao" required placeholder="Conte mais sobre o projeto..."></textarea>
          <button type="button" class="prev-btn">← Voltar</button>
          <button type="submit">Enviar ✅</button>
        </div>
        <div class="form-step success-step">
          <h2>Obrigado! 🙌</h2>
          <p>Recebemos seu formulário e entraremos em contato.</p>
        </div>
      </form>
    `;

    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.appendChild(wrapper);

    // JS do flow
    this.initFormFlow();
  }

  initFormFlow() {
    const form = this.shadowRoot.getElementById('nortiForm');
    const steps = this.shadowRoot.querySelectorAll('.form-step');
    let currentStep = 0;

    const showStep = (index) => {
      steps.forEach((step, i) => step.classList.toggle('active', i === index));
    };

    form.addEventListener('click', (e) => {
      if (e.target.classList.contains('next-btn')) {
        if (steps[currentStep].querySelector('input, select, textarea').checkValidity()) {
          currentStep++;
          showStep(currentStep);
        } else {
          steps[currentStep].querySelector('input, select, textarea').reportValidity();
        }
      }
      if (e.target.classList.contains('prev-btn')) {
        currentStep--;
        showStep(currentStep);
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Aqui você envia para Web3Forms, FormSubmit, etc
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'SEU_ACCESS_KEY_AQUI',
          name: form.nome.value,
          email: form.email.value,
          message: `Tipo de projeto: ${form.tipo.value}\nOrçamento: ${form.orcamento.value}\nDescrição: ${form.descricao.value}`
        })
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          currentStep++;
          showStep(currentStep);
        }).catch(err => console.error(err));
    });
  }
}

customElements.define('norti-form', NortiForm);
