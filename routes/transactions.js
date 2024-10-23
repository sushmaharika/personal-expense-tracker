const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Add a new transaction
router.post('/', transactionController.createTransaction);

// Retrieve all transactions
router.get('/', transactionController.getAllTransactions);

// Retrieve a transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/:id', transactionController.updateTransactionById);

// Delete a transaction by ID
router.delete('/:id', transactionController.deleteTransactionById);

// Retrieve a summary of transactions
router.get('/summary', transactionController.getTransactionSummary);

module.exports = router;
