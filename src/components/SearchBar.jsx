import React from 'react';

class SearchBar extends React.Component {
	onInputChange(query) {
		this.props.onQuery(query);
	}

	render() {
		return (
			<div className="search">
				<input onChange={event => this.onInputChange(event.target.value)} type="text" placeholder="Search for Gitters!" />
			</div>
		);
	}
}

export default SearchBar;
