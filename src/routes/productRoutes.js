const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET todos los productos
router.get('/', productController.getProducts);

// POST crear producto
router.post('/', productController.createProduct);

module.exports = router;
