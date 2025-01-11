// scripts.js
let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsElement.appendChild(listItem);
    });
}

document.getElementById('checkoutButton').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('سلة التسوق فارغة!');
    } else {
        alert('شكراً لشرائك! سيتم الدفع قريباً.');
    }
});
