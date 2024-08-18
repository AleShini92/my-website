// let root = document.querySelector(":root");
// let theme = document.getElementById("theme");
// let circle = document.getElementById("circle");

// theme.addEventListener('click', () => {
//   event.preventDefault();
//   root.classList.toggle('dark');

//   document.getElementById("circle").style.transform = `translateX(30px)`;
// })

let root = document.querySelector(":root");
let theme = document.getElementById("theme");
let circle = document.getElementById("circle");

// Variabile per tracciare lo stato del cerchio
let isMovedRight = false;

theme.addEventListener('click', (event) => {
  event.preventDefault();
  root.classList.toggle('dark');

  if (isMovedRight) {
    // Se il cerchio è già spostato a destra, lo sposta indietro a sinistra
    circle.style.transform = `translateX(0px)`;
    circle.style.background = "white";

    // imposto il colore iniziale
    theme.style.borderColor = "white";
  } else {
    // Se il cerchio non è spostato, lo sposta a destra
    circle.style.transform = `translateX(30px)`;
    circle.style.background = "hsl(302, 100%, 50%)";

    // cambio colore al click
    theme.style.borderColor = "hsl(302, 100%, 50%)";
  }

  // Inverte lo stato per il prossimo click
  isMovedRight = !isMovedRight;
});