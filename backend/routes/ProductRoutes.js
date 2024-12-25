const express = require('express');
const multer = require('multer');
const { getProducts, createProduct, getDetailProduct } = require('../controllers/ProductController.js');

// Middleware untuk upload file dengan multer
const upload = multer({ dest: 'uploads/products/' }); // Folder sementara di server

const router = express.Router();

// Endpoint API
router.get('/', getProducts);
router.get('/:id', getDetailProduct)
router.post('/', upload.single('thumbnail'), createProduct);

module.exports = router;
