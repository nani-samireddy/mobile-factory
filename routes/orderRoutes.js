const express = require('express');
const { createOrder, getAllOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.get('/orders', getAllOrders); // New route to get all orders

module.exports = router;
