import { nortiCardsData } from './norti-card-content.js';

const container = document.querySelector(".norti-cards-container");

nortiCardsData.forEach(card => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("norti-card");

  cardEl.innerHTML = `
    <img src="${card.image}" alt="${card.title}" class="norti-card-img">
    <div class="norti-card-overlay">
      <h3 class="norti-card-title">${card.title}</h3>
      <p class="norti-card-subtitle">${card.date}</p>
    </div>
  `;

  container.appendChild(cardEl);
});
