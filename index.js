const Wig = [
  {
    name: "Adult Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Male Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/men wig.jpg",
    inStock: false,
  },
  {
    name: "Child Male Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/kidwig.webp",
    inStock: false,
  },
  {
    name: "Judge Male Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/GWLA.webp",
    inStock: false,
  },
  {
    name: "George Washington Ahh Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/GWLAW.webp",
    inStock: false,
  },
    {
    name: "Witch Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/WITCH.webp",
    inStock: false,
  },
    {
    name: "Fancy Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/fancy.webp",
    inStock: false,
  },
      {
    name: "Marie Antoinette Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/MAW.webp",
    inStock: false,
  },
        {
    name: "Queen of Hearts Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/QOH.jpg",
    inStock: false,
  },
          {
    name: "Fancy Womens Wig",
    price: 80.0,
    category: "Adults",
    img: "/pictures/fancyw.jpg",
    inStock: false,
  },
        {
    name: "Men's Wig",
    price: 80.0,
    category: "Adults",   
    img: "/pictures/men.webp",
    inStock: false,
  },
          {
    name: "Liberal's Wig",
    price: 80.0,
    category: "Adults",   
    img: "/pictures/liberal.webp",
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
  inStock: document.querySelector(".inStock")
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
      <p class="price">In Stock:${card.inStock}</p>
      <button class="btn">Add to Cart</button>
      </div>
`
  );
}


Wig.forEach(inject);
