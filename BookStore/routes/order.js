const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, addOrderToUserHistory } = require('../controllers/user');
const { create, listOrders } = require('../controllers/order');
const { decreaseQuantityIncreaseSold } = require('../controllers/product');


router.param('userId', userById);
router.post('/order/create/:userId', requireSignin, isAuth, create, addOrderToUserHistory, decreaseQuantityIncreaseSold);
router.get('/orders/list/:userId', requireSignin, isAuth, isAdmin, listOrders);

module.exports = router;