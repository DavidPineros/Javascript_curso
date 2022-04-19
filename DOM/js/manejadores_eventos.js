// tres maneras de definir los eventos en js

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

//manejador semantico -- forma mas correcta de manejar un evento en JS, aunque solo va ha realizar una funcion

const $eventoSemantico = document.getElementById("evento-semantico");
// elementoHTml.evento = funcion sin parentesis;
$eventoSemantico.onclick = holaMundo;

//Evento con manejador multiple

const $eventoMultiple = document.getElementById("evento-multiple");
//elementoHTml.evento(tipo de evento ,funcion sin parentesis);
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo con manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
