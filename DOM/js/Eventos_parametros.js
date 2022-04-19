const $evento = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("eliminar-evento");

function holaMundo(e) {
  alert("Hola Mundo");
  console.log(e);
}

function saludar(nombre = "Desconocid@") {
  alert(
    `Hola ${nombre} utilizando un parametro dentro de la funcion manejadora`
  );
}

$evento.addEventListener("click", holaMundo);
$evento.addEventListener("click", (e) => {
  alert("Hola Mundo con manejador de evento multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

//forma para que una funcion que se ejecuta en un evento tenga parametro, se tendra que  envolver en un arrow function o una funcion anonima
$evento.addEventListener("click", () => {
  saludar();
  saludar("David");
});

//Remover eventos= esto solo se podra hacer con eventos de manejador multiple, para remover una funcion manejadora no puede ser anonima o arrow function
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true; //desabilita el boton
};
$eventoRemover.addEventListener("dblclick", removerDobleClick);
