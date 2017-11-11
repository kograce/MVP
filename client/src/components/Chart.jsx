import React from 'react';

const Chart = (songs) => (
	<div>
		<h3>SONGSONGSONGS</h3>
		{songs.map(song => ()
		<Songs
			artist: {song.artistName}
			songName: {song.songName}
			issueDate: {song.issueDate}
			currentRank: {song.currentRank}
		/>
		)}
	</div>
	)




export default Chart;