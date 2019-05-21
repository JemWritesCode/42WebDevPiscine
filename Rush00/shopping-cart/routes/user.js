var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){ //isLoggedIn should just be reference to the function, not execute it. 
	res.render('user/profile');
});

router.use('/', notLoggedIn, function(req, res, next){
	next();
});

router.get('/register', function(req, res, next){
	var messages = req.flash('error');
	res.render('user/register', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/register', passport.authenticate('local.signup', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/register',
	failureFlash: true
}));

router.get('/signin', function(req, res, next){
	var messages = req.flash('error');
	res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/signin',
	failureFlash: true
}));

router.get('/logout', function(req, res, next){
	req.logout();
	res.redirect('/');
})

module.exports = router;

function isLoggedIn(req, res, next){
	if (req.isAuthenticated()){ // isAuthenticated comes from the passport package -- it handles it automatically. 
		return next();
	}
	res.redirect('/');
} 

function notLoggedIn(req, res, next){
	if (!req.isAuthenticated()){ // isAuthenticated comes from the passport package -- it handles it automatically. 
		return next();
	}
	res.redirect('/');
} 