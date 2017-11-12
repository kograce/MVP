const express = require('express');
const melon = require('../helpers/melon.js');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.post('/chart', function(req,res) {
	// NOTWORKINGBCGETSONGSISNTWORKINGDAMMIT
	console.log('in server post /chart', req.body.data);
})


app.get('/chart', function(res, req) {
	// console.log('in server get in /chart');
	// melon.getSongs(artistName, function(){
	// 	console.log('is this working?');
	// })
	// db.Song.find()
	// 	.limit(50);
});


let port = 1998;
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});