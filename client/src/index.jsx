import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DatePicker from './components/DatePicker.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props;
	}

	getDate() {
		$.ajax({
			type: 'POST',
			url: '/chart'
		});
		console.log(this.state, 'this.state in getreq indexjsx');
		console.log(this.props, 'this.props in getreq indexjsx');
	}

	render() {
		return( <div>
			<h1>For the Love of K-Pop</h1>
			<DatePicker onSubmit={this.getDate.bind(this)}></DatePicker>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

