const chocolates = [
  { name: "Ferrero Rocher", image: "images/ferrero.jpg", price: "₹299", link: "https://www.amazon.in/s?k=Ferrero+Rocher" },
  { name: "Lindt Excellence", image: "images/lindt.jpg", price: "₹349", link: "https://www.amazon.in/s?k=Lindt+Excellence" },
  { name: "Toblerone", image: "images/toblerone.jpg", price: "₹199", link: "https://www.amazon.in/s?k=Toblerone" },
  { name: "KitKat", image: "images/kitkat.jpg", price: "₹49", link: "https://www.amazon.in/s?k=KitKat" },
  { name: "Galaxy", image: "images/galaxy.jpg", price: "₹59", link: "https://www.amazon.in/s?k=Galaxy+Chocolate" },
  { name: "Amul Dark", image: "images/amul.jpg", price: "₹80", link: "https://www.amazon.in/s?k=Amul+Dark+Chocolate" },
  { name: "Snickers", image: "images/snickers.jpg", price: "₹30", link: "https://www.amazon.in/s?k=Snickers" },
  { name: "Bournville", image: "images/bournville.jpg", price: "₹99", link: "https://www.amazon.in/s?k=Bournville" },
  { name: "Milkybar", image: "images/milkybar.jpg", price: "₹25", link: "https://www.amazon.in/s?k=Milkybar" },
  { name: "Temptations", image: "images/temptations.jpg", price: "₹120", link: "https://www.amazon.in/s?k=Temptations+Chocolate" }
];

const container = document.getElementById("chocolate-container");

chocolates.forEach(choco => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${choco.image}" alt="${choco.name}">
    <h2>${choco.name}</h2>
    <p>${choco.price}</p>
    <a href="${choco.link}" target="_blank">
      <button>Buy on Amazon</button>
    </a>
  `;

  container.appendChild(card);
});