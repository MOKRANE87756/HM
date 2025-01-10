const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: '1', name: 'Laptop', price: 999.99, image: 'laptop.jpg' },
  { id: '2', name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
  { id: '3', name: 'Headphones', price: 199.99, image: 'headphones.jpg' },
];

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
