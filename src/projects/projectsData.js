function generateImagesInFolder(slug, count, ext = "jpg") {
  const base = `../img/projects/${slug}/norti-idv-${slug}-`;
  return Array.from({ length: count }, (_, i) => `${base}${i + 1}.${ext}`);
}

function generateImagesFlat(prefix, count, ext = "jpg") {
  const base = `../img/projects/${prefix}-`;
  return Array.from({ length: count }, (_, i) => `${base}${i + 1}.${ext}`);
}

export const projectsData = {
  "a-penteadeira": {
    title: "A Penteadeira",
    subtitle: "Sofisticação, cuidado e uma experiência acolhedora.",
    location: "Guaíba",
    year: "Mai/2025",
    description:
      "<p>A Penteadeira é um espaço de beleza exclusivo para mulheres que, há mais de 16 anos, valoriza o cuidado autêntico e natural. Ao longo de sua trajetória, a marca construiu uma relação próxima com suas clientes, transformando cada visita em uma experiência acolhedora, tranquila e personalizada.</p><p>A identidade visual foi desenvolvida para traduzir essa essência. Construída a partir da proporção áurea, a marca garante harmonia e equilíbrio, com um símbolo que reforça a letra “A”, remete ao espelho e, de forma sutil, ao contorno de um rosto feminino. Uma construção sofisticada e memorável, que respeita a história da empresa, fortalece sua presença no digital e prepara a marca para os próximos anos.</p>",
    images: generateImagesInFolder("apenteadeira", 25, "jpg")
  }
  ,

  "ezitech": {
    title: "Ezitech",
    subtitle: "Tecnologia, confiança e soluções rápidas para o seu dia a dia.",
    location: "Porto Alegre",
    year: "Ago/2023",
    description:
      "<p>Especializada na manutenção de celulares, notebooks, desktops e impressoras, destacando-se pela qualidade e eficiência em seus serviços. Conta com uma ampla seleção de acessórios, como fones de ouvido, capinhas e carregadores, garantindo soluções completas para dispositivos eletrônicos.</p><p>A empresa se destaca pelo compromisso com a satisfação do cliente, tratando cada equipamento com cuidado e dedicação para superar expectativas e entregar resultados de alta qualidade.</p>",
    images: generateImagesInFolder("ezitech", 32, "jpg")
  },

  "pad-thai": {
    title: "Pad Thai",
    subtitle: "Sabores tailandeses, saúde e autenticidade.",
    location: "Guaíba",
    year: "Ago/2023",
    description:
      "<p>Pad Thai é um serviço de delivery especializado em culinária tailandesa, com planos futuros de inaugurar seu próprio restaurante. O projeto de marca foi desenvolvido para traduzir a essência da gastronomia tailandesa saudável, equilibrando sabor, leveza e autenticidade.</p><p>Voltado para quem busca refeições mais saudáveis em vez de lanches gordurosos, o design utiliza cores, elementos e detalhes que reforçam frescor, bem-estar e identidade cultural, posicionando a marca de forma clara e atrativa no mercado.</p>",
    images: generateImagesInFolder("padthai", 23, "jpg")
  },

  "danear": {
    title: "Danear",
    subtitle: "Conforto térmico, precisão técnica e atendimento onde você estiver.",
    location: "Guaíba",
    year: "Nov/2022",
    description:
      "<p>Especializada em instalação e manutenção de ar-condicionado automotivo, a Danear atende veículos da linha leve, pesada, agrícola e florestal, oferecendo soluções eficientes com alto padrão técnico e confiabilidade.</p><p>A empresa se diferencia pela manutenção em campo, levando atendimento qualificado diretamente até onde as máquinas estão. Seu conceito de marca representa movimento, união e equilíbrio, simbolizando as pessoas que impulsionam a empresa e a harmonia entre ar quente e ar frio.</p>",
    images: generateImagesInFolder("danear", 27, "jpg")
  }
};
