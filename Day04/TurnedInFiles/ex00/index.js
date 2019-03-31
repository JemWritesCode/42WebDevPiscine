// This doesn't work.

//npm install express
//npm install ejs
//npm install cookie-parser
//npm install express-session

const express = require('express'); //Express is used for the server framework
const ejs = require('ejs'); // EJS is used for the Template Engine. It allows the use of variables in the Markup(layout.ejs).
const cookieParser = require('cookie-parser'); //Used for cookie to store the Login/Password
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

// APP USE/SET
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
let sessions = {};


// APP GET /
app.get('/',(req, res) => {
	CookieLogin = '';
	CookiePass = '';

	//if (req.cookies && req.cookies.NODESESSID && sessions[req.cookies.NODESESSID]) {
	//	CookieLogin = sessions[req.cookies.NODESESSID].login;
	//	CookiePass = sessions[req.cookies.NODESESSID].passwd;
	//} else if (req.query.submit == "OK" && req.query.login && req.query.passwd){
	//	sessions[req.sessionID] = {};
	//	sessions[req.sessionID].login = req.query.login;
	//	sessions[req.sessionID].passwd = req.query.passwd; 
	//	CookieLogin =  req.query.login;
	//	CookiePass =  req.query.passwd; 
	//	res.cookie('NODESESSID', req.sessionID);
	//} else 
	//	res.cookie('NODESESSID', req.sessionID);

	if (req.query.submit == "OK" && req.query.login && req.query.passwd){
		CookieLogin= req.query.login;
		CookiePass = req.query.passwd;
		res.cookie('NODESESSID', req.sessionID);
		res.cookie('UserName', CookieLogin);
		res.cookie('Password', CookiePass);
	}


	// Set the Cookies.



	//Show Me The Cookies
	console.log(req.cookies)



	res.render('../layout.ejs', {login: CookieLogin, passwd: CookiePass})
});

//app.get('/clearcookie', function(req,res){
//	res.clearCookie('NODESESSID', req.sessionID);
//	res.clearCookie('UserName');
//	res.clearCookie('Password');
//     res.send('Cookie deleted');
//});



app.listen(port, () => console.log(`The app is listening on port ${port}!`))