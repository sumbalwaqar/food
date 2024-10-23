var express = require('express');
var router = express.Router();
const Home = require('./home');
const auth = require('./auth');
const cart = require('./cart');

/* GET home page. */
router.get('/', Home);
router.get('/login',auth().login);
router.get('/register',auth().register);
router.get('/cart', cart);

module.exports = router;
