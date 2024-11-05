// Add item to cart and store it in localStorage
function addToCart(itemName, itemPrice) {
    // Retrieve cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: itemName, price: itemPrice });
    
    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${itemName} has been added to your cart.`);
}

// Update the cart display on the cart page
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cartItems && totalPrice) {
        cartItems.innerHTML = '';  // Clear existing items
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }
}

// Clear the cart from both the display and localStorage
function clearCart() {
    localStorage.removeItem("cart");  // Remove cart from localStorage
    updateCartDisplay();  // Clear the display
    alert('Cart has been cleared.');
}

// Call updateCartDisplay when the page loads to display cart items if any
window.onload = updateCartDisplay;
