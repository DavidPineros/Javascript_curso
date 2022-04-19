console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en"; //cambiar el valor de un atributo de html
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-CO"); //set atribbute cambian el valor de un atributo indicando primero el atriburto y el nuevo valor
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom"); //guardar un llamado en una constantes, se pone $ antes del nombre como una buena practica

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel")); // saber si cierta variable o etiqueta tiene un determinado atributo
$linkDOM.removeAttribute("rel"); //borra unn atributo
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDOM.dataset.description);

$linkDOM.set;
