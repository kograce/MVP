const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../dist'));

app.use(function(req, res, next) {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// app.post('someEndpoint', function(something, callback) {

// });

// app.get('someEndPoint', function(res, req) {

// });


let port = 1998;
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});