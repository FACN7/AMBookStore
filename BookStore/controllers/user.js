const User = require('../models/user');
const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.user = user;
        next();
    })
}

exports.read = (req, res) => {
    req.user.hashed_password = undefined;
    req.user.salt = undefined;
    res.json(req.user);
}

exports.update = (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized!"
                });
            }
            req.user.hashed_password = undefined;
            req.user.salt = undefined;
            res.json(user);
        })
}

exports.addOrderToUserHistory = (req, res, next) => {
    const history = [];
    req.body.order.products.forEach((item) => {
        history.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            category: item.category, Order,
            quantity: item.quantity,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.amount
        });
    })
    User.findOneAndUpdate({ _id: req.user._id },
        { $push: { history } },
        { new: true },
        (error, data) => {
            if (error) return res.status(400).json({ error: 'could not update user purchase history' })
            next();
        }
    );
};

exports.purchaseHistory = (req, res) => {
    Order.find({ user: req.user._id })
        .populate('user', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};
