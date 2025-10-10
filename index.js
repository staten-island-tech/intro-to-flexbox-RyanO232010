const Wig = [
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
];

const DOMSelectors = {
  name: document.querySelector(".name"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
  button: document.querySelector(".btn"),
  price: document.querySelector(".price"),
  picture: document.querySelector(".img"),
};

function inject(card) {
  const container = document.querySelector(".container");
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="card">
      <h1>${card.name}</h1>
      <img class="img" src="${card.img}"/>
      <p class="price">$${card.price}</p>
      <button class="btn">Add to Cart</button>
      </div>
`
  );
}


Wig.forEach(inject);
