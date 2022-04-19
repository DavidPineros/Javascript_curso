const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
</p>
<p>
  <mark>El DOM no es parte de la especificacion de JavaScript, es un API para los navegadores.</mark>
</p>`;

//$whatIsDOM.innerText = text;  NO ES PARTE DEL ESTANDAR

$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
