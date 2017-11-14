import React from 'react';
// import ChartEntry from './ChartEntry.jsx';

var Entry = (props) => (
	<div>
		<p>{props.rank}. {props.title}</p>
		<p>Artist: {props.artist}</p>
		<p>Album: {props.album}</p>
	</div>

)


const Chart = (props) => (
	<div>
		{Object.entries(props.chart).map(song => (
			<Entry
				rank={song[1].rank}
				title={song[1].title}
				artist={song[1].artist}
				album={song[1].album}
			/>
		))}
		<br></br>
	</div>
)

export default Chart;