
const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};



exports.signin = (req, res) => {

    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: 'User does not exist!' });
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({ error: 'Wrong Email or password!' })
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        const threeHoursFromNow = new Date() + 9999;
        res.cookie('c', token, { expire: threeHoursFromNow });
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } });
    })
}

exports.signout = (req, res) => {
    res.clearCookie('c');
    res.json({ message: 'Signout succeeded!' })
}


exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
    const user = req.user && req.auth && req.user._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access denied"
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return res.status(403).json({
            error: "Admin only! access denied"
        })
    }
    next();
}
