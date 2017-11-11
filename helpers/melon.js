const request = require('request');
const melonConfig = require('../config.js');

let getSongs = (artistName, callback) => {
	let options = {
		method: 'GET',
		url: 'http://apis.skplanetx.com/melon/artists?version=1&page=1&count=50&searchKeyword=${artistName}',
		headers: {
			'User-Agent': 'request',
			'Authorization': `apiKey ${melonConfig.API_KEY}`
		}
	};

	request(options, function(err, res, body) {
		if (err) {
			console.log('there was an error');
		} else {
			callback(body);
		}
	})
}

module.exports.getSongs = getSongs;