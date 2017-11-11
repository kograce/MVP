import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artistName:''
		}
	}

	onChange(e) {
		this.setState({artistName: e.target.value});
	}

	search() {
		this.props.onSearch(this.state.artistName);
	}

	render() {
		return(<div>
			Enter artist name: <input value = {this.state.artistName} onChange={this.onChange.bind(this)}/>
			<button onClick={this.search.bind(this)}>Search</button>
			</div>)
	}
}

export default Search;