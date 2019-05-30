// I think I'm somewhat using this incorrectly.

var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');

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

module.exports = router;