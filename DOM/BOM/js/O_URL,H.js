console.log("************ Objeto URL (location)**********");
console.log(location); //es un objeto, con diferentes propiedades y metodos
//Algunas propiedades del location
console.log(location.origin); //de donde se origina la ubicacion de la pagina
console.log(location.protocol); //el protocolo
console.log(location.host); //nombre del dominio
console.log(location.hostname);
console.log(location.port); //puerto
console.log(location.href); //toda la URL
console.log(location.hash); //detecta valor de URL despues de un # utilizada para hacer rutas amigables
console.log(location.pathname); //archivo consultado
console.log(location.search); //valores por url

console.log("************ Objeto historial**********");
console.log(history);
console.log(history.length); //paginas visitadas
//console.log(history.back(3));pagina hacia atras
//console.log(history.forward(3));pagina hacia adelante
//console.log(history.go(0)); //ir a una pagina acepta numeros positivos o negativos

console.log("************ Objeto navegador**********");
console.log(navigator);
console.log(navigator.connection); //informacion de la coneccion del usuario
console.log(navigator.geolocation);
console.log(navigator.mediaDevices); //dispositvios conectsdos camara, microfonos
console.log(navigator.mimeTypes); //tipos de formatos que acepta el navegador
console.log(navigator.onLine); //saber si la coneccion del usuario esta activa
console.log(navigator.serviceWorker); //
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
