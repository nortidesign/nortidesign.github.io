import { projectsData } from './projectsData.js';

const $ = sel => document.querySelector(sel);
const getCSS = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

const params = new URLSearchParams(location.search);
const project = projectsData[params.get("project")];

async function loadImage(src) {
  const tries = [
    src,
    src.replace(/^\.\.\//, ''),
    `../${src}`,
    `../../${src}`,
    `./${src}`,
    `/${src}`,
  ];

  for (const t of [...new Set(tries)]) {
    const ok = await new Promise(r => {
      const img = new Image();
      img.onload = () => r(t);
      img.onerror = () => r(null);
      img.src = t;
    });
    if (ok) return ok;
  }
  return null;
}

function placeholder() {
  const bg = getCSS('--color-background-tertiary') || '#eee';
  const tx = getCSS('--color-text-primary') || '#000';
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450">
      <rect width="100%" height="100%" fill="${bg}"/>
      <text x="50%" y="50%" dominant-baseline="middle"
        text-anchor="middle" fill="${tx}" font-size="24">
        Imagem não encontrada
      </text>
    </svg>`
  )}`;
}

async function addImage(container, src, alt) {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = alt;
  img.src = (await loadImage(src)) || placeholder();

  const wrap = document.createElement("div");
  wrap.classList.add("project-image-wrap");
  wrap.appendChild(img);
  container.appendChild(wrap);
}

function updatePlaceholders() {
  document.querySelectorAll('img[src^="data:image"]').forEach(img => {
    img.src = placeholder();
  });
}

// Observa troca de tema
new MutationObserver(updatePlaceholders)
  .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

if (!project) {
  document.body.innerHTML = "<p>Projeto não encontrado.</p>";
} else {
  $('#norti-projectTitle').textContent = project.title;
  $('#norti-projectSubtitle').textContent = project.subtitle;
  $('#norti-projectYear').textContent = project.year;
  $('#norti-projectDescription').innerHTML = project.description;

  (async () => {
    for (const src of project.images) {
      await addImage($('#project-images'), src, project.title);
    }
  })();
}
