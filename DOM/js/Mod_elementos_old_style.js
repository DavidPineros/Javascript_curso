const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src= "https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption> 
  `;
$newCard.classList.add("card");

//reemplazar una nodo tipo elemento

//$cards.replaceChild($newCard, $cards.children[2]);

//INsertar antes de la primera

//$cards.insertBefore($newCard, $cards.firstElementChild);

//eliminar
//$cards.removeChild($cards.lastElementChild);

//clonar un nodo

document.body.appendChild($cloneCards);
