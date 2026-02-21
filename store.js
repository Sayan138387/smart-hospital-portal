// dark mode toggle

const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
});

// cart page

document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartCount = document.getElementById("cartCount");

  const addCartButtons = document.querySelectorAll(".add-cart");

  function updateCartUI() {
    if (cartCount) {
      cartCount.textContent = `${cart.length}`;
    }
  }

  addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;

      cart.push({name, price});
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartUI();
      alert(`${name} added to cart`);
    });
  });

  updateCartUI();
});