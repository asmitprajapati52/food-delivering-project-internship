const foodItems = [
  { name: "Burger", price: 120, img: "pictures/burger.jpg" },
  { name: "Pizza", price: 150, img: "pictures/pizza.jpg" },
  { name: "Fries", price: 80, img: "pictures/fries.jpg"},
  { name: "Momos", price: 100, img: " pictures/momos.jpg" },
  { name: "Sandwich", price: 90, img: "pictures/sandwitch.webp" },
  { name: "Pasta", price: 130, img: "pictures/pasta.jpg " },
  { name: "Tacos", price: 140, img: "pictures/tacos.jpg " },
  { name: "Biryani", price: 180, img: " pictures/briyani.jpg" },
  { name: "Noodles", price: 110, img: " pictures/noodles.jpg" },
  { name: "Dosa", price: 95, img: " pictures/dosa.jpg" },
  { name: "Paneer Tikka", price: 160, img: "pictures/paneer tikka.jpg " },
{ name: "Spring Rolls", price: 100, img: " pictures/spring roll.jpg" },
{ name: "Chole Bhature", price: 120, img: " pictures/chole bhature.jpg" },
{ name: "Cheese Burst Pizza", price: 200, img: "pictures/cheese burst pizza.jpg" },
{ name: "Veg Thali", price: 180, img: " pictures/veg thali.jpg" },
{ name: "Chocolate Cake", price: 150, img: " pictures/chocolate cake.jpg" },
{ name: "Ice Cream Sundae", price: 90, img: "pictures/Ice-cream-sundae.jpg " },
{ name: "Grilled Sandwich", price: 110, img: "pictures/sandwitch.webp " },
{ name: "Malai Kofta", price: 170, img: "pictures/malai kofta.jpg " },
{ name: "Chicken Curry", price: 190, img: "pictures/chicken curry.jpg " },
{ name: "Tandoori Roti", price: 25, img: "pictures/tandoori roti.jpg " },
{ name: "Butter Naan", price: 30, img: "pictures/butter naan.jpg " },
{ name: "Falooda", price: 90, img: "pictures/faaluda.jpg " },
{ name: "Cold Coffee", price: 70, img: "pictures/butter naan.jpg " },
{ name: "Lassi", price: 60, img: " pictures/lassi.webp" },
];
const container = document.getElementById('food-container');
const cartlist=document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
const orderMessage = document.getElementById('order-message');
const searchInput = document.getElementById('search-input');

let totalAmount=0;

foodItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'food-card';
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button>Add to Cart</button>
  `;

  searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const foodCards = document.querySelectorAll(".food-card");

  foodCards.forEach(card => {
    const itemName = card.querySelector("h3").textContent.toLowerCase();
    if (itemName.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const button = card.querySelector("button");
  button.addEventListener("click", () => {
    addToCart(item.name, item.price);
  });

  container.appendChild(card);
});

function addToCart(name, price) {
  const li = document.createElement("li");
  li.textContent = `${name} - ${price}`;
  cartlist.appendChild(li);
 totalAmount += price;
  cartTotal.textContent = `Total: ${totalAmount}`;
}

// Place Order Button Handler
document.getElementById("place-order-btn").addEventListener("click", () => {
  if (cartlist.children.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  cartlist.innerHTML = "";
  totalAmount = 0;
  cartTotal.textContent = "Total: 0";
  orderMessage.textContent = "✅ Order placed successfully!";
  orderMessage.style.display = "block";
});