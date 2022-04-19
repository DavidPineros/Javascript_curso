console.log("****************Elementos del documento************");
console.log(window.document);
console.log(document); //devuelve el mapeo del DOM completo
console.log(document.head); //devuelve la etiqueta head y sus elementos hiijo del documento html
console.log(document.body); //devuelve la etiqueta body y sus elementos hiijo del documento html
console.log(document.documentElement); //devuelve la etiqueta html y sus elementos hijo
console.log(document.doctype); //tipo de documento
console.log(document.charset); //juego de caracteres del documento
console.log(document.title); //titulo del documento
console.log(document.links); // enlaces del documento
console.log(document.images); //imagenes dentro del documento
console.log(document.forms); // formularios dentro del documento
console.log(document.styleSheets); // hojas de estilos enlasadas al dom
console.log(document.scripts); // Archivos de script
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000); //Muestra elementos soleccionas del DOM
document.write(
  "<h4>Esta una forma de escribir en el DOM aunque no es la mejor practica con document.write()</h4>"
);
