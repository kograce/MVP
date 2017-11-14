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
			year: '',
			chart: {}
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
		var scope = this;
		$.ajax({
			type: 'POST',
			url: '/chart',
			data: scope.state,
			contentType: "application/json"
		});
	};

	getChart() {
		console.log('in getchart');
		var scope = this;
		$.ajax({
			type: 'GET',
			url:'/chart',
			json: true,
			success: function(chart) {
				scope.setState({chart: chart.data});
			}
		})
	}

	componentDidMount() {
		console.log('in componentDidMount');
		this.getChart();
	}

	render() {
		return( <div>
			<h1>For the Love of K-Pop</h1>
			<DatePicker submitDate={this.submitDate.bind(this)} handleMonth={this.handleMonth.bind(this)} handleDay={this.handleDay.bind(this)} handleYear={this.handleYear.bind(this)}></DatePicker>
			<Chart chart={this.state.chart}></Chart>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

