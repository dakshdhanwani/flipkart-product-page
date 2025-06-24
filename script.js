const products = [
  {
    id: 1,
    name: "Samsung Galaxy M12",
    price: 12999,
    desc: "48MP | 6000mAh | 6.5-inch Display",
    img: "Screenshot 2025-06-24 133542.png"
  },
  {
    id: 2,
    name: "Realme Narzo 50",
    price: 11999,
    desc: "50MP | 5000mAh | Helio G96",
    img: "Screenshot 2025-06-24 133841.png"
  },
  {
    id: 3,
    name: "Redmi Note 11",
    price: 13999,
    desc: "Snapdragon 680 | 90Hz Display",
    img: "Screenshot 2025-06-24 134041.png"
  },
];

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
document.getElementById('cart-count').innerText = cartCount;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  localStorage.setItem('cartCount', cartCount);
}

function renderProducts() {
  const container = document.getElementById('product-list');
  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">₹${product.price}</p>
      <p>${product.desc}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

renderProducts();
