const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Define your category routes here
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;
