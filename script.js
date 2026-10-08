const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeBtn = document.querySelector('#themeBtn');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀' : '◐';
});

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = 'Nota destacada ✓';
    setTimeout(() => button.textContent = 'Leer la nota →', 1800);
  });
});
