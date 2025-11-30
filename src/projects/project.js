import { projectsData } from './projectsData.js';

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');

const project = projectsData[projectId];

if (project) {
  document.getElementById('norti-projectTitle').textContent = project.title;
  document.getElementById('norti-projectSubtitle').textContent = project.subtitle;
  document.getElementById('norti-projectYear').textContent = project.year;
  document.getElementById('norti-projectDescription').innerHTML = project.description;

  const imagesContainer = document.getElementById('project-images');
  project.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = project.title;
    imagesContainer.appendChild(img);
  });
} else {
  document.body.innerHTML = '<p>Projeto não encontrado.</p>';
}
