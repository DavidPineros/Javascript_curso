/*Metodos

.insertAdjacent...  
.insertAdjacentElement(position, el)
.insertAdjacentHTML(position, html)
.insertAdjacentText(position, text)

Position:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
  <img src= "https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption> 
  `;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
setTimeout(() => {
  $cards.insertAdjacentElement("beforebegin", $newCard);
}, 1000);
setTimeout(() => {
  $cards.insertAdjacentElement("afterbegin", $newCard);
}, 5000);
setTimeout(() => {
  $cards.insertAdjacentElement("beforeend", $newCard);
}, 10000);
setTimeout(() => {
  $cards.insertAdjacentElement("afterend", $newCard);
}, 15000);

//$cards.prepend($newCard)
//$cards.before($newCard)
//$cards.append($newCard)
//$cards.after($newCard)
