const foodItems = [
  { name: "Burger", price: 120, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg" },
  { name: "Pizza", price: 150, img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgbXJj7igPnSKXcgSP2UTJT0kTYxAGrcQhQ&s" },
  { name: "Fries", price: 80, img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLetnQTeyzm8StHzS_UpZDjW5m9M1uP4uPxg&s"},
  { name: "Momos", price: 100, img: " https://www.cookforindia.com/wp-content/uploads/2016/02/Momos-snap.jpg" },
  { name: "Sandwich", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIFmKSdDjQnT59g4SBeA3drvHeQivpoOAbg&s" },
  { name: "Pasta", price: 130, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGxJQNLQ_tpfDqgGfFpEARarc7qNGTDVEYg&s " },
  { name: "Tacos", price: 140, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7oXh7oBXmOo0PFZpRptjz3Fa3jJghIVDvg&s" },
  { name: "Biryani", price: 180, img: "https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg" },
  { name: "Noodles", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s" },
  { name: "Dosa", price: 95, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-8GMEL1suUh34eyCtaTk-z75PC-klHkLRA&s " },
  { name: "Paneer Tikka", price: 160, img: " https://carveyourcraving.com/wp-content/uploads/2021/10/paneer-tikka-skewers.jpg" },
{ name: "Spring Rolls", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_L2rH6p6AMUEpDd_C82fuqVKPwTvAfKU-w&s" },
{ name: "Chole Bhature", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfxC3_gPgiXyRF4CEoAtrF6Kp0DHra65GTQ&s " },
{ name: "Cheese Burst Pizza", price: 200, img: "https://i.pinimg.com/736x/eb/ee/e8/ebeee82a42e0428d299f86ab74faf77a.jpg " },
{ name: "Veg Thali", price: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueCeUq00nnyLe4iaHIaGL5he_ZeVAvUYGmQ&s" },
{ name: "Chocolate Cake", price: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvHaIOV0b1awoY71O0a9KzCgrduE2VxfNEQ&s" },
{ name: "Ice Cream Sundae", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Nt0nJF29vfWipscAQbctChm29qB5w3h_JQ&s " },
{ name: "Grilled Sandwich", price: 110, img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtZqhxsfjXoAwSg8acirXCziWfpW7aphKdA&s" },
{ name: "Malai Kofta", price: 170, img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEAfJ3_uUudkAoehDaQpvPNZf5BFf3Irdgw&s" },
{ name: "Chicken Curry", price: 190, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KfliqLSvMmQa5rOpSHI2aPRDkOXM6frJ1g&s " },
{ name: "Tandoori Roti", price: 25, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbbh04lsttJ0bVAl538JqmrSiVyGc5_XPYg&s" },
{ name: "Butter Naan", price: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLv-Dclr8ZMc36DOJD9cNgQ_6wotA3rXX-3A&s " },
{ name: "Falooda", price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNFysdpwk8g-nh1rtF-ibSzvomrOU2mh_4g&s " },
{ name: "Cold Coffee", price: 70, img: " https://www.milkmaid.in/sites/default/files/2024-05/Cold-Coffee-335x300.jpg" },
{ name: "Lassi", price: 60, img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6aY15z_BpfmjNFPCC4m9IqFcs26LZr1ofQ&s"},
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