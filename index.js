const Wig = [
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: False,
  },
];

const DOMSelectors = {
  container: document.querySelector("container"),
  button: document.querySelector(".btn"),
  price: document.querySelector(".price"),
  picture: document.querySelector(".img")

};








function inject(card) {
  const contianer = document.querySelector(".container")
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h1>"${card.name}"</h1>
      <img class="img" src="${card.img}"/>
      <button class="btn">Add to Cart</button>
      <
    </div>`
  );
}

inject(Wig[0])