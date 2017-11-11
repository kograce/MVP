const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let songSchema = mongoose.Schema({
	date : Date,
	artist: String,
	songName: String,
	issueData: Date,
	currentRank: Number
});

let Song = mongoose.model('Song', songSchema);

