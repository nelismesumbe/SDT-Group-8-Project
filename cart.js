let cart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 15000,
    qty: 1,
    image: "images/headphones.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 25000,
    qty: 2,
    image: "images/smartwatch.jpg"
  }
];

const cartItemsDiv = document.getElementById("cart-items");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");
const deliveryFee = 1000;

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h3>${item.name}</h3>
        <p>${item.price.toLocaleString()} FCFA</p>
      </div>
      <div class="qty-control">
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
    `;

    cartItemsDiv.appendChild(div);
  });

  subtotalEl.textContent = subtotal.toLocaleString() + " FCFA";
  totalEl.textContent = (subtotal + deliveryFee).toLocaleString() + " FCFA";
}

function changeQty(id, change) {
  cart = cart.map(item => {
    if (item.id === id) {
      return { ...item, qty: Math.max(1, item.qty + change) };
    }
    return item;
  });
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Checkout feature coming soon for Gadget Hub!");
});

renderCart();