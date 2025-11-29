document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const logoImg = document.getElementById('logo-img');

  // Sempre inicia em light na primeira visita
  let savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    savedTheme = 'light';
    localStorage.setItem('theme', 'light');
  }

  // Aplica o tema correto
  document.documentElement.setAttribute('data-theme', savedTheme);
  logoImg.src = savedTheme === 'light'
    ? 'img/light-logo-norti-design.png'
    : 'img/dark-logo-norti-design.png';

  // Alternância tema/logo
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);

    logoImg.src = newTheme === 'light'
      ? 'img/light-logo-norti-design.png'
      : 'img/dark-logo-norti-design.png';

    localStorage.setItem('theme', newTheme);
  });
});
