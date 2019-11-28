exports.userSignupValidator = (req, res, next) => {
    req.check("name").notEmpty().withMessage("Name is required!")
    req.check("email")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .withMessage("You must enter a valid EMAIL!");
    req.check("password", "password is required!").notEmpty()
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/)
        .withMessage("password must contain at least 8 characters, a lower case char, an upper case char and a number!");
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(e => e.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}