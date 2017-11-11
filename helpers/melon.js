const request = require('request');
const melonConfig = require('../config.js');

let getSongs = (artistName) => {
	let options = {
		url: 'http://apis.skplanetx.com/melon/artists?version=1&page=1&count=50&searchKeyword=${artistName}'
	}
}