// Variables & Conditionals
let userAge = 20; // example variable
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}

// Capture user input from DOM
document.getElementById("greetBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}!`;
  } else {
    document.getElementById("greeting").textContent = "Please enter your name!";
  }
});

// =========================
// Part 2: Functions
// =========================

// Function 1: Calculate total price
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

// Function 2: Format price
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// =========================
// Part 3: Loops
// =========================

// Shopping cart array
let cart = [10.99, 5.49, 3.75];
let cartList = document.getElementById("cart-list");

// Loop through cart and display items
cart.forEach((item, index) => {
  let li = document.createElement("li");
  li.textContent = `Item ${index + 1}: ${formatCurrency(item)}`;
  cartList.appendChild(li);
});

// Display total
document.getElementById("cart-total").textContent = formatCurrency(calculateTotal(cart));

// Countdown demo
document.getElementById("countdownBtn").addEventListener("click", function() {
  let countdownDisplay = document.getElementById("countdown");
  let counter = 5;

  countdownDisplay.textContent = counter;

  let interval = setInterval(() => {
    counter--;
    countdownDisplay.textContent = counter;

    if (counter === 0) {
      clearInterval(interval);
      countdownDisplay.textContent = "🚀 Blast off!";
    }
  }, 1000);
});

// =========================
// Part 4: DOM Manipulation
// =========================

// Toggle dark mode theme
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
