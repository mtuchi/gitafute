import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="search">
				<input type="text" placeholder="Search for Gitters!" />
			</div>
		);
	}
}

export default SearchBar;
