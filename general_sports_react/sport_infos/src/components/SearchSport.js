import React, { Component } from 'react';

class SearchSport extends Component {

	constructor(props){
		super(props);

		// this.state = { term: 'Input Search' };
	}

	render(){
		return (
			<div className="search">
				<h1>Lets search Sport</h1>
				<input
				type="text" 
				onChange={this.props.handleSearch}
				value={this.props.term}
				/>
			</div>
		);
	}
}

export default SearchSport;