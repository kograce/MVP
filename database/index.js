const mongoose = require('mongoose');

let songSchema = mongoose.Schema({
	date : Date,
	artist: String,
	songName: String,
	issueDate: Date,
	currentRank: Number
});

let Song = mongoose.model('Song', songSchema);
let saveToDB = (songList) => {
		song = new Song({
			date: songList.date,
			artist: songList.artist,
			songName: songList.songName,
			issueDate: songList.issueDate,
			currentRank: songList.currentRank
		});

		song.saveToDB = (err) => {
			if (err) {
				console.log('hello. err err');
			} else {
				console.log('saved successfully');
			}
		}
	};



module.exports.Song = Song;
module.exports.saveToDB = saveToDB;