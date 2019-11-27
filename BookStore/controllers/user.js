const User = require('../models/user')

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