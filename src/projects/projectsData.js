function generateImagesInFolder(slug, count, ext = "jpg") {
  const base = `../img/projects/${slug}/norti-idv-${slug}-`;
  return Array.from({ length: count }, (_, i) => `${base}${i + 1}.${ext}`);
}

function generateImagesFlat(prefix, count, ext = "png") {
  const base = `../img/projects/${prefix}-`;
  return Array.from({ length: count }, (_, i) => `${base}${i + 1}.${ext}`);
}

export const projectsData = {
  "a-penteadeira": {
    title: "A Penteadeira",
    subtitle: "Construção de marcas consistentes e memoráveis.",
    location: "São Paulo",
    year: "Mai/2025",
    description: "Projeto focado na criação de marcas memoráveis e consistentes no mercado.",
    images: generateImagesFlat("norti-a-penteadeira", 3, "png")
  },

  "ezitech": {
    title: "Ezitech",
    subtitle: "Tecnologia, confiança e soluções rápidas para o seu dia a dia.",
    location: "Rio de Janeiro",
    year: "Ago/2023",
    description:
      "<p>Especializada na manutenção de celulares, notebooks, desktops e impressoras, destacando-se pela qualidade e eficiência em seus serviços. Conta com uma ampla seleção de acessórios, como fones de ouvido, capinhas e carregadores, garantindo soluções completas para dispositivos eletrônicos.</p><p>A empresa se destaca pelo compromisso com a satisfação do cliente, tratando cada equipamento com cuidado e dedicação para superar expectativas e entregar resultados de alta qualidade.</p>",
    images: generateImagesInFolder("ezitech", 35, "jpg")
  },

  "pad-thai": {
    title: "Pad Thai",
    subtitle: "Interfaces intuitivas e fluxos bem construídos.",
    location: "Curitiba",
    year: "Ago/2023",
    description: "Design de interfaces amigáveis e experiência fluida.",
    images: generateImagesFlat("norti-pad-thai", 2, "png")
  },

  "consultoria": {
    title: "Danear",
    subtitle: "Auxílio estratégico para o crescimento visual da sua marca.",
    location: "Porto Alegre",
    year: "Nov/2022",
    description: "Consultoria completa para crescimento estratégico de marca.",
    images: generateImagesFlat("norti-danear", 2, "png")
  }
};
