let root = document.querySelector(":root");
let theme = document.getElementById("theme");

theme.addEventListener('click', () => {
  event.preventDefault();
  root.classList.toggle('dark');
})