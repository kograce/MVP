import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	search(artistName) {
		console.log(`${artistName} was searched`);
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

