console.log(document.getElementsByTagName("li")); //Traer elemnetos por  nombre de la etiqueta
console.log(document.getElementsByClassName("card")); //Traer elemnetos por  nombre de la clase
console.log(document.getElementsByName("nombre")); //por nombre
console.log(document.getElementById("menu")); //trae elemento por la ID

console.log(document.querySelector("#menu")); //selector valido de css, pero solo trae el primero que encuentre
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a")); //Ya trae todos lo que encuentre, no solo el primero
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[4]);
console.log(document.querySelectorAll("#menu li"));
