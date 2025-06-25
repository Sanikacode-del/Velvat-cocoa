const chocolates = [
  {
    name: "Ferrero Rocher (16 pcs)",
    price: "₹ 529",
    image: "images/ferrero.jpg",
    link: "https://www.amazon.in/Ferrero-78205-Rocher-16-Pieces/dp/B00BYQEIL6"
  },
  {
    name: "Lindt Excellence 70% Dark 100 g",
    price: "₹ 340",
    image: "images/lindt.jpg",
    link: "https://www.amazon.in/Lindt-Excellence-Cocoa-Dark-Chocolate/dp/B0863F27G6"
  },
  {
    name: "Toblerone Swiss Milk 100 g",
    price: "₹ 270",
    image: "images/toblerone.jpg",
    link: "https://www.amazon.in/Mondelez-Toblerone-Tone-Milk-Chocolate/dp/B000LQLN0E"
  },
  {
    name: "Nestlé KitKat (Pack of 10)",
    price: "₹ 100",
    image: "images/kitkat.jpg",
    link: "https://www.amazon.in/Nestl%C3%A9-Kitkat-Chocolate-10-12-8-Grams/dp/B01M35XILH"
  },
  {
    name: "Galaxy Smooth Milk (4 × 110 g)",
    price: "₹ 299",
    image: "images/galaxy.jpg",
    link: "https://www.amazon.in/Galaxy-Smooth-Milk-Chocolate-Pack/dp/B09DCWG1Z9"
  },
  {
    name: "Amul Dark Chocolate 150 g",
    price: "₹ 80",
    image: "images/amul-dark.jpg",
    link: "https://www.amazon.in/Amul-Dark-Chocolate-150g/dp/B07CVJHKWG"
  },
  {
    name: "Snickers Peanut Bar 45 g (24 pk)",
    price: "₹ 999",
    image: "images/snickers.jpg",
    link: "https://www.amazon.in/Snickers-Peanut-Filled-Chocolate-Bars/dp/B082KZXRH5"
  },
  {
    name: "Cadbury Bournville 80 g",
    price: "₹ 90",
    image: "images/bournville.jpg",
    link: "https://www.amazon.in/Cadbury-Bournville-Dark-Chocolate-Bar/dp/B08GXXPWY5"
  },
  {
    name: "Nestlé Milkybar Creamy 42 g (14 pk)",
    price: "₹ 560",
    image: "images/milkybar.jpg",
    link: "https://www.amazon.in/Nestle-MILKYBAR-Creamy-Chocolate-Tablet/dp/B08R7BXG6Z"
  },
  {
    name: "Cadbury Temptations Almond Treat 70 g",
    price: "₹ 120",
    image: "images/temptations.jpg",
    link: "https://www.amazon.in/Cadbury-Temptation-Almond-Treat-Chocolate/dp/B07FP9CSMD"
  }
];

const grid = document.getElementById("chocolate-grid");

chocolates.forEach(choco => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${choco.image}" alt="${choco.name}" />
    <h3>${choco.name}</h3>
    <p>${choco.price}</p>
    <a href="${choco.link}" target="_blank">
      <button>Buy on Amazon</button>
    </a>
  `;
  grid.appendChild(card);
});