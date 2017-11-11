import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	loadPage() {
		$.ajax({
			type: 'GET',
			url: '/chart',
			data: 'json',
			success: function(data) {
				console.log('successful get', data);
			}
		})
	}

	search(artistName) {
		$.ajax({
			type: 'POST',
			url: '/chart',
			data: artistName,
			success: function(data) {
				console.log(data);
			},
			error: function(err, data) {
				console.log('did not post correctly');
			}
		})
	}

	componentDidMount() {
		this.loadPage();
	}

	render() {
		return( <div>
			<h1>For the Love of K-Pop</h1>
			<Search onSearch={this.search.bind(this)} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

