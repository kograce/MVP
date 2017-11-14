const mongoose = require('mongoose');
const db = mongoose.connection;

let chartSchema = mongoose.Schema({
	rank: Number,
	title: String,
	artist: String,
	album: String
});

let Chart = mongoose.model('Chart', chartSchema);

let singleEntry;
let saveToDB = function(chartData, err) {
	for (var i = 0; i < chartData.data.length; i++) {
			singleEntry = createSongEntry(chartData.data[i])
	}
};

saveToDB(singleEntry, function(err) {
	if (err) {
		throw err;
	} else {
		console.log('successful db save');
	}
});

let createSongEntry = function(song) {
	return new Chart({rank: song.rank, title: song.title, artist: song.artist, album: song.album })
}



// module.exports.Song = Song;
module.exports.saveToDB = saveToDB;