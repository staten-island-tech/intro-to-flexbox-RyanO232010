const Wig = [
  {
    name: "Adult Womens Wig",
    price: 23.99,
    category: "Female Adults",
    img: "/pictures/women.png",
    inStock: false,
  },
  {
    name: "Adult Male Wig",
    price: 58.0,
    category: "Male Adults",
    img: "/pictures/men wig.jpg",
    inStock: false,
  },
  {
    name: "Child Male Wig",
    price: 37.99,
    category: "Kids",
    img: "/pictures/kidwig.webp",
    inStock: false,
  },
  {
    name: "Judge Male Wig",
    price: 92.0,
    category: "Male Adults",
    img: "/pictures/GWLA.webp",
    inStock: false,
  },
  {
    name: "George Washington Ahh Wig",
    price: 45.99,
    category: "Male Adults",
    img: "/pictures/GWLAW.webp",
    inStock: false,
  },
  {
    name: "Witch Wig",
    price: 81.0,
    category: "Female Adults",
    img: "/pictures/WITCH.webp",
    inStock: false,
  },
  {
    name: "Fancy Wig",
    price: 26.99,
    category: "Male Adults",
    img: "/pictures/fancy.webp",
    inStock: true,
  },
  {
    name: "Marie Antoinette Wig",
    price: 67.0,
    category: "Female Adults",
    img: "/pictures/MAW.webp",
    inStock: false,
  },
  {
    name: "Queen of Hearts Wig",
    price: 99.99,
    category: "Female Adults",
    img: "/pictures/QOH.jpg",
    inStock: false,
  },
  {
    name: "Fancy Womens Wig",
    price: 30.0,
    category: "Female Adults",
    img: "/pictures/fancyw.jpg",
    inStock: false,
  },
  {
    name: "Men's Wig",
    price: 74.99,
    category: "Male Adults",
    img: "/pictures/men.webp",
    inStock: false,
  },
  {
    name: "Liberal's Wig",
    price: 52.0,
    category: "Female Adults",
    img: "/pictures/liberal.webp",
    inStock: false,
  },
  {
    name: "Puffy Wig",
    price: 41.99,
    category: "Female Adults",
    img: "/pictures/puffy.jpg",
    inStock: false,
  },
  {
    name: "Pink Wig",
    price: 87.0,
    category: "Female Adults",
    img: "/pictures/PW.jpg",
    inStock: false,
  },
  {
    name: "Issac Newton AHH Wig",
    price: 22.99,
    category: "Male Adults",
    img: "/pictures/INA.jpeg",
    inStock: false,
  },
  {
    name: "Young Issac Newton AHH Wig",
    price: 66.0,
    category: "Adults",
    img: "/pictures/YINA.jpg",
    inStock: false,
  },
  {
    name: "Enlightenment Philosopher Wig",
    price: 49.99,
    category: "Male Adults",
    img: "/pictures/EP.jpg",
    inStock: false,
  },
  {
    name: "Thomas Jefferson AHH Wig",
    price: 78.0,
    category: "Male Adults",
    img: "/pictures/TJAW.jpeg",
    inStock: false,
  },
  {
    name: "Kid George Washington AHH Wig",
    price: 35.99,
    category: "Kids",
    img: "/pictures/KGWAW.avif",
    inStock: false,
  },
  {
    name: "Puffier Issac Newton AHH Wig",
    price: 66.0,
    category: "Male Adults",
    img: "/pictures/PIN.jpg",
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
  inStock: document.querySelector(".stock"),
};


function inject(card) {
  const container = document.querySelector(".container");
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    ` <div class="card">
      <h1>${card.name}</h1>
      <img class="img" src="${card.img}"/>
      <p class="price">$${card.price}</p>
      <p class="stock">In Stock: ${card.inStock}</p>
      <button class="btn">Add to Cart</button>
      </div>
`
  );
}



Wig.forEach(inject);

document.querySelectorAll(".filters .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let category = "";
    if (btn.id === "kidsBtn") category = "Kids";
    else if (btn.id === "maleBtn") category = "Male Adults";
    else if (btn.id === "femaleBtn") category = "Female Adults";

    displayWigs(Wig.filter(w => w.category === category));
  });
});