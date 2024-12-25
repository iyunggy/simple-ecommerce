const express = require('express');
const { getProducts, createProduct } = require('../controllers/ProductController.js');

const router = express.Router();

// Endpoint API
router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router;
