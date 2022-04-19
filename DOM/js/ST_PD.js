const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEvento = document.querySelector(".eventos-flujo a");

console.log($divEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

$divEventos.forEach((div) => div.addEventListener("click", flujoEventos));

$linkEvento.addEventListener("click", (e) => {
  alert("hola es tu amigo y docente digital...");
  e.preventDefault(); //cancela el comportamiento por default que tenia el elemento html
  e.stopPropagation();
});
