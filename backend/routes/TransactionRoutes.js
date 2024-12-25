const express = require('express');
const { createTransaction } = require('../controllers/TransactionController.js');

const router = express.Router();

// Endpoint API
router.post('/', createTransaction);

module.exports = router;
