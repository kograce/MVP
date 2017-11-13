const mongoose = require('mongoose');
const db = mongoose.connection;

let chartSchema = mongoose.Schema({
	rank: Number,
	title: String,
	artist: String,
	album: String
});

let Chart = mongoose.model('Chart', chartSchema);

let saveToDB = (chartData, err) => {
	let singleEntry;
	for (var i = 0; i < chartData.data.length; i++) {
		console.log('in db forloop');
		for (song in chartData.data[i]) {
			console.log('in db obj for loop');
			singleEntry = new Chart({
				rank: chartData.data[i].rank,
				title: chartData.data[i].title,
				artist: chartData.data[i].artist,
				album: chartData.data[i].album
			}).saveToDB(singleEntry,function(err){
				if (err) {
					console.log('unsuccessful db save');
				} else {
					console.log('sucessful db save');
				}
			});
		}
	}
};



// module.exports.Song = Song;
module.exports.saveToDB = saveToDB;