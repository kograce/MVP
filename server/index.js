const express = require('express');

let app = express();

app.post('someEndpoint', function(something, callback) {

});

app.get('someEndpoint', function(somethingElse, callback) {

});


let port = 1998;
app.listen(port, function() {
	console.log(`listening on port {$port}`);
});