const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: '1', name: 'Laptop', price: 999.99, image: 'laptop.jpg', special: true },
  { id: '2', name: 'Smartphone', price: 499.99, image: 'smartphone.jpg', special: false },
  { id: '3', name: 'Headphones', price: 199.99, image: 'headphones.jpg', special: false },
  { id: '4', name: 'Smartwatch', price: 299.99, image: 'smartwatch.jpg', special: true },
  { id: '5', name: 'Camera', price: 699.99, image: 'camera.jpg', special: false },
  { id: '6', name: 'Gaming Console', price: 399.99, image: 'console.jpg', special: true }
];

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
