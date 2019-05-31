var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');

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

router.get('/add-to-cart/:id', function(req, res, next){ //:id tells it you expect the id to be passed in (in this case of the item we are adding to the cart)
	// push the product you want to add into the cart object
	var productID = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart: {}); // if cart exists, pass the old cart. otherwise empty object. 

	Product.findById(productID, function(err, product){ // this uses the model from above with mongoose
		if (err){
			return res.redirect('/');
		}
		cart.add(product, product.id);
		req.session.cart = cart; // express will send this back every time response is sent.
		console.log(req.session.cart);
		return res.redirect('/');
	})
});

router.get('/shopping-cart', function(req, res, next){
	if (!req.session.cart){
		return res.render('shop/shopping-cart', {products: null});
	}
	var cart = new Cart(req.session.cart);
	res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/charge', function(req, res, next){
	res.render('shop/charge');
});

router.post('/charge', function(req, res, next){
	res.render('shop/charge');
});

router.get('/checkout', function(req, res, next){
	if(!req.session.cart){
		return res.redirect('/shopping-cart');
	}
	var cart = new Cart(req.session.cart);
	res.render('shop/checkout', {total: cart.totalPrice});
})

module.exports = router;