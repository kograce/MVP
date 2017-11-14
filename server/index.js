const express = require('express');
const melon = require('melon-chart-api');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.post('/chart', function(req,res) {
	var monthObj = {
		'January': 1,
		'February': 2,
		'March': 3,
		'April': 4,
		'May': 5,
		'June': 6,
		'July': 7,
		'August': 8,
		'September': 9,
		'October': 10,
		'November': 11,
		'December': 12
	};
	var monthSelection = monthObj[req.body.month];
	var month = monthSelection < 10 ? '0'+monthSelection : monthSelection;
	var day = req.body.day < 10 ? '0'+ req.body.day : req.body.day;
	var year = req.body.year;
	var fullDate = "'" + month + '/' + day + '/' + year + "'";

	melon(fullDate, {cutLine: 20}).weekly().then(chartData => {
		res.send(chartData);
	});
});

app.get('/chart', function(req,res) {
	var month = new Date().getMonth();
	var day = new Date().getDate();
	var year = new Date().getFullYear();
	var monthTwoDigits = month < 10 ? '0'+month : month;
	var dayTwoDigits = day < 10 ? '0'+day : day;
	var fullDate = "'" + monthTwoDigits + '/' + dayTwoDigits + '/' + year + "'";

	melon(fullDate, {cutLine: 20}).weekly().then(chartData => {
		res.send(chartData);
	})
});


let port = 1998;
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});