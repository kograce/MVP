import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return( <div>
			<h1>For the Love of K-Pop</h1>
			<Search onSearch={this.search.bind(this)}
			</div>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

