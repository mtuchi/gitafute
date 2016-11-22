import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{
					id: 239742,
					name: "Pete Hunt",
					email: "floydophone@gmail.com",
					login: "",
					avatar_url: "https://avatars.githubusercontent.com/u/239742?v=3",
				},
				{
					id: 3260441,
					name: "Joshua Mabina",
					email: "mabinajoshua@gmail.com",
					login: "joshuamabina",
					avatar_url: "https://avatars.githubusercontent.com/u/3260441?v=3",
				},
				{
					id: 6592749,
					name: "Emmanuel Evance",
					email: "emmanuel@irabu.co.tz",
					login: "mtuchi",
					avatar_url: "https://avatars.githubusercontent.com/u/6592749?v=3",
				},
				{
					id: 463230,
					name: "Taylor Otwell",
					email: "taylor@laravel.com",
					login: "taylorotwell",
					avatar_url: "https://avatars.githubusercontent.com/u/463230?v=3",
				}
			]
		};

	}

	handleQuery(query) {
		console.log("Searching for a Gitter using " + query);
	}

	render() {
		return (
			<div>
				<SearchBar onQuery={(q) => this.handleQuery(q)} />
				<UserList users={this.state.users} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
