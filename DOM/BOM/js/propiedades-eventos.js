window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***************Evento resize***************");
  console.log(window.innerWidth); //ancho del navegador en la pantalla
  console.log(window.innerHeight); //alto del navegador en la pantalla
  console.log(window.outerHeight); //tamaño del monitor alto
  console.log(window.outerWidth); //tamaño del monitor ancho
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("***************Evento scroll***************");
  console.log(window.scrollX); //scroll horizontal
  console.log(window.scrollY); //scroll vertical
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("***************Evento load***************");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(
    "***************Evento DOMContentLoaded***************",
    "******************Mejor practica*********************"
  );
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
