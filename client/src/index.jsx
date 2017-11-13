import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DatePicker from './components/DatePicker.jsx';
import Chart from './components/Chart.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: '',
			day: '',
			year: ''
		}
	}

	handleMonth(e) {
		this.setState({
			month: e.target.value
		});
	};

	handleDay(e) {
		this.setState({
			day: e.target.value
		});
	};

	handleYear(e) {
		this.setState({
			year: e.target.value
		})
	};

	submitDate(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/chart',
			data: JSON.stringify(this.state),
			dataType: 'text',
			contentType: "application/json"
		});
	};

	componentDidMount() {
		$.ajax({
			type: 'GET',
			url:'/chart',
			success: function(data) {
				$("body").append(data);
			}
		});
	}

	render() {
		return( <div>
			<h1>For the Love of K-Pop</h1>
			<DatePicker submitDate={this.submitDate.bind(this)} handleMonth={this.handleMonth.bind(this)} handleDay={this.handleDay.bind(this)} handleYear={this.handleYear.bind(this)}></DatePicker>
			<Chart onMount={this.componentDidMount}></Chart>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

