const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById, addOrderToUserHistory } = require('../controllers/user');
const { create, listOrders, getStatusValues, orderById, updateOrderStatus } = require('../controllers/order');
const { decreaseQuantityIncreaseSold } = require('../controllers/product');


router.param('userId', userById);
router.param('orderId', orderById);
router.post('/order/create/:userId', requireSignin, isAuth, create, addOrderToUserHistory, decreaseQuantityIncreaseSold);
router.get('/orders/list/:userId', requireSignin, isAuth, isAdmin, listOrders);
router.get('/orders/status-values/:userId', requireSignin, isAuth, isAdmin, getStatusValues);
router.put('/orders/:orderId/status/:userId', requireSignin, isAuth, isAdmin, updateOrderStatus);

module.exports = router;