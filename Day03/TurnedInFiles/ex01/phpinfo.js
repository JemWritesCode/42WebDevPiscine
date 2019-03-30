// Use Express to run the server
// npm i express
// Run that ^to install express locally in the folder with the project. Just don't turn in node_modules

// const http     = require('http');
// const os		= require('os');

// module.exports = (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
// 	let ret = [process.env, process.version, os.cpus()];
//     res.end(JSON.stringify(ret));
// };

const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))