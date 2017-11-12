import React from 'react';

class DatePicker extends React.Component {
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
		this.props.onSubmit(this.state);
	};

	render() {
		var days = [];
		for (var i = 1; i < 32; i++) {
			days.push(<option type='text' name={i}>{i}</option>)
		}
		var years = [];
		var today = new Date();
		var year = today.getFullYear();
		for (var i = 1998; i <= year; i++) {
			years.push(<option type='text' name={i}>{i}</option>)
		}
		return(<div>
			<h2>Pick a date to see daily K-Pop chart for that day!</h2>
				<form onSubmit={this.submitDate.bind(this)}>
					<label>Month: </label>
						<select type='text' name='month' onChange={this.handleMonth.bind(this)} >
							<option type='text' name='january'>January</option>
							<option type='text' name='february'>February</option>
							<option type='text' name='march'>March</option>
							<option type='text' name='april'>April</option>
							<option type='text' name='may'>May</option>
							<option type='text' name='june'>June</option>
							<option type='text' name='july'>July</option>
							<option type='text' name='august'>August</option>
							<option type='text' name='september'>September</option>
							<option type ='text' name='october'>October</option>
							<option type='text' name='november'>November</option>
							<option type='text' name='december'>December</option>
						</select>

						<label> Day: </label>
						<select type='text' name='day' onChange={this.handleDay.bind(this)} >
							{days}
						</select>

						<label> Year: </label>
						<select type='text' name='year' onChange={this.handleYear.bind(this)} >
							{years}
						</select>

						<button type='submit'>Submit Date</button>
				</form>


			</div>)
	}
}

export default DatePicker = DatePicker;