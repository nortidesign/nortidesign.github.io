class NortiContact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.loadTypeform();
    }

    render() {
        this.innerHTML = `
            <section class="norti-contact-section">
                <div class="norti-contact-container">
                    
                    <div class="norti-contact-info">
                        <h1>Vamos conhecer seus desafios.</h1>
                        <p>
                            Preencha a solicitação para que possamos agendar um horário e conversarmos sobre seu projeto.
                        </p>
                        <p>
                            Se preferir, nos envie um e-mail para: <br>
                            <a href="mailto:contato@nortidesign.com.br">contato@nortidesign.com.br</a>
                        </p>
                    </div>

                    <div class="norti-form-wrapper">
                        <div data-tf-widget="RjRoaKRc" 
                             data-tf-opacity="100" 
                             data-tf-inline-on-mobile 
                             data-tf-iframe-props="title=Typeform do Estúdio" 
                             style="width:100%; height:500px;">
                        </div>
                    </div>

                </div>
            </section>
        `;
    }

    loadTypeform() {
        if (!document.querySelector('script[src*="embed.typeform.com"]')) {
            const script = document.createElement('script');
            // Usando HTTPS explícito para evitar problemas localmente
            script.src = "https://embed.typeform.com/next/embed.js";
            script.async = true;
            document.head.appendChild(script);
        }
    }
}

// Define o componente apenas se ainda não existir
if (!customElements.get('norti-contact')) {
    customElements.define("norti-contact", NortiContact);
}