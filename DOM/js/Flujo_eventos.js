const $divEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

$divEventos.forEach((div) => {
  //Fase de burbuja - elemento mas interno al mas externo y se identifica cuando no esta el tercer parametro o es false
  //div.addEventListener("click", flujoEventos,);
  //div.addEventListener("click", flujoEventos, false);
  //fase de captura- del elemento mas externo al mas interno y se identifica con el true
  div.addEventListener("click", flujoEventos, true);
});

$divEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos, {
    capture: false, //fase de captura desabilitado
    once: true, // el evento se ejecutara una sola vez
  });
});
