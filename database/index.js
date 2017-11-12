const mongoose = require('mongoose');
const db = mongoose.connection;

let chartSchema = mongoose.Schema({
	artist: String,
});

let Chart = mongoose.model('Chart', chartSchema);

let saveToDB = (date) => {

	};



// module.exports.Song = Song;
module.exports.saveToDB = saveToDB;