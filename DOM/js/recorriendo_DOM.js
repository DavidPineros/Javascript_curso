// todo estos metodos son para los nodos tipo elementos

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

console.log($cards.closest("div"));
console.log($cards.closest("body")); // metodo que busca el ancestro padre mas cercano del tipo del selector que le demos

console.log($cards.children[3].closest("section"));
