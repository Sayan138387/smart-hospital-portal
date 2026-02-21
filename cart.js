document.addEventListener("DOMContentLoaded", () => {

  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const clearCartBtn = document.getElementById("clearCart");

  if (!cartItemsDiv) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
      totalPriceEl.textContent = "Total: ₹0";
      return;
    }

    cart.forEach((item, index) => {
      total += Number(item.price);

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartItemsDiv.appendChild(div);
    });

    totalPriceEl.textContent = `Total: ₹${total}`;
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      localStorage.removeItem("cart");
      cart = [];
      renderCart();
    });
  }

  renderCart();

});
