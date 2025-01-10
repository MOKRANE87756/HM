async function loadProducts() {
  const response = await fetch('/api/products');
  const products = await response.json();

  const productList = document.getElementById('product-list');
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="col-md-4">
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}

document.addEventListener('DOMContentLoaded', loadProducts);
