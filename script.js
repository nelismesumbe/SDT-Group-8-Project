const products = [
  {
    name: "Phone",
    price: 400,
    description: "A high-end smartphone with advanced features.",
    image: "phone.jpg"
  },
  {
    name: "Television",
    price: 500,
    description: "A 4K resolution television with HDR support.",
    image: "television.jpg"
  },
  {
    name: "Headset",
    price: 200,
    description: "A wireless headset with noise cancellation.",
    image: "headset.jpg"
  },
  {
    name: "Smart Watch",
    price: 175,
    description: "A fitness tracking smart watch with heart rate monitor.",
    image: "smartwatch.jpg"
  },
  {
    name: "Laptop",
    price: 850,
    description: "A powerful laptop for work and gaming.",
    image: "laptop.jpg"
  },
  {
    name: "Drone",
     price: 250,
     description: "Up to 30 minutes of flight time.",
     image: "drone.jpg"
  },
  {
    name: "Camera",
     price: 750,
     description: "25 Megapixel.",
     image: "camera.jpg"
  },
  {
    name: "Printer",
     price: 1200,
     description: "Wireless all-in-one printer.",
     image: "printer.jpg"
  },
  {
   name: "Tablet",
     price: 750,
     description: "Multi-purpose mobile tablet.",
     image: "tablet.jpg"
  },
  {
    name: "Power bank",
     price: 200,
     description: "Long-lasting power bank.",
     image: "powerbank.jpg"
  },
  {
    name: "Projector",
     price: 600,
     description: "Full HD 1080p resolution.",
     image: "projector.jpg"
  },
  {
     name: "Air pods",
     price: 100,
     description: "Wireless airpods with noise cancellation.",
     image: "airpod.jpg"
  }
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
  const productHTML = `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button>Buy Now</button>
    </div>
  `;
  productContainer.innerHTML += productHTML;
});