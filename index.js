const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(cors());

const products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

//Endpoint-1
const sortByPopularity = (product1, product2) => {
  return product2.rating - product1.rating;
};
app.get('/products/sort/popularity', (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(sortByPopularity);
  res.json(sortedProducts);
});

//Endpoint-2
const sortByPricing = (product1, product2) => {
  return product2.price - product1.price;
};
app.get('/products/sort/price-high-to-low', (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(sortByPricing);
  res.json(sortedProducts);
});

//Endpoint-3
const sortByPricingAscending = (product1, product2) => {
  return product1.price - product2.price;
};
app.get('/products/sort/price-low-to-high', (req, res) => {
  let productsCopy = products.slice();
  let sortedProducts = productsCopy.sort(sortByPricingAscending);
  res.json(sortedProducts);
});

//Endpoint-4
const filterByRam = (product, filterParam) => {
  return product.ram === filterParam;
};
app.get('/products/filter/ram', (req, res) => {
  let productCopy = products.slice();
  let ram = parseInt(req.query.ram);
  let result = productCopy.filter((item) => filterByRam(item, ram));
  res.json(result);
});

//Endpoint-5
const filterByRom = (product, filterParam) => {
  return product.rom === filterParam;
};
app.get('/products/filter/rom', (req, res) => {
  let rom = parseInt(req.query.rom);
  let result = products.filter((item) => filterByRom(item, rom));
  res.json(result);
});

//Endpoint-6
const filterByBrand = (product, filterParam) => {
  return product.brand.toLowerCase() === filterParam.toLowerCase();
};
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let result = products.filter((item) => filterByBrand(item, brand));
  res.json(result);
});

//Endpoint-7
const filterByOs = (product, filterParam) => {
  return product.os.toLowerCase() === filterParam.toLowerCase();
};
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let result = products.filter((item) => filterByOs(item, os));
  res.json(result);
});

//Endpoint-8
const filterByPrice = (product, filterParam) => {
  return product.price <= filterParam;
};
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let result = products.filter((item) => filterByPrice(item, price));
  res.json(result);
});

//Endpoint-9
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
