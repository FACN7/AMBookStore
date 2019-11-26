const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin } = require('../controllers/auth');
const { userSignupValidator } = require('../validator/index');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

//use the require signin for each route that needs auth
//an example:
// router.get('/test', requireSignin, (req, res) => {
//     res.send("this is a test!")
// });

module.exports = router;