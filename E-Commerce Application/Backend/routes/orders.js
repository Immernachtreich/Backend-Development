const express = require('express');

const orderController = require('../controllers/orders.js');

const router = express.Router();

router.post('/add-order', orderController.postOrder);

router.get('/get-orders', orderController.getAllOrders);

module.exports = router;