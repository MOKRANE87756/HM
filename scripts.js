let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} ريال`;
        cartItems.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('totalPrice').textContent = `إجمالي السعر: ${totalPrice} ريال`;
}
