const express = require('express');
const multer = require('multer');
const { getProducts, createProduct } = require('../controllers/ProductController.js');

// Middleware untuk upload file dengan multer
const upload = multer({ dest: 'uploads/products/' }); // Folder sementara di server

const router = express.Router();

// Endpoint API
router.get('/', getProducts);
router.post('/', upload.single('thumbnail'), createProduct);

module.exports = router;
