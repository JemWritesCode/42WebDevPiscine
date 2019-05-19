var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err,docs){
		var productChunks = [];
		var chunkSize = 3;
		for (var i = 0; i < docs.length; i += chunkSize){
			productChunks.push(docs.slice(i, i + chunkSize));
		}
		res.render('shop/index', { title: 'FakeShop', products: productChunks});
	});
});

router.get('/user/register', function(req, res, next){
	res.render('user/register', {csrfToken: req.csrfToken()});
})

router.post('/user/register', passport.authenticate('local.signup', {
	successRedirect: '/profile',
	failureRedirect: '/register',
	failureFlash: true
}));

router.get('/profile', function(req, res, next){
	res.render('user/profile');
});

module.exports = router;
