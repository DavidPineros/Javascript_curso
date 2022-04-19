/*window.alert(
  "El metodo alert() se compone de un mensaje de texto y boton de aceptar"
);
window.confirm("confirm() envia un mensaje y botones de aceptar o cancelar");
window.prompt(
  "Es un mensaje que tiene aceptar o cancelar y un campo para que el usuario agregue un valor"
);*/

const $botonAbrir = document.getElementById("abrir-ventana"),
  $botonCerrar = document.getElementById("cerrar-ventana"),
  $botonImprimir = document.getElementById("imprimir-ventana");

let ventana;

$botonAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});
$botonCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$botonImprimir.addEventListener("click", (e) => {
  window.print();
});
