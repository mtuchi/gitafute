import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import PlayerPreview from '../../components/PlayerPreview';

function Profile(props) {
	let info = props.info;

	return (
		<PlayerPreview avatar={info.avatar_url} username={info.login}>
			<ul className="space-list-items">
				{info.name && <li>{info.name}</li>}
				{info.location && <li>{info.location}</li>}
				{info.company && <li>{info.company}</li>}
				<li>followers: {info.followers}</li>
				<li>following: {info.following}</li>
				<li>Public repos: {info.public_repos}</li>
				{info.blog && <li><a href={info.blog} target="_blank">{info.blog}</a></li>}
			</ul>
		</PlayerPreview>
	)
}

Profile.propTypes = {
	info: PropTypes.object.isRequired,
}

function Player(props) {
	return (
		<div>
			<h1 className="header">{props.label}</h1>
			<h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
			<Profile info={props.profile} />
		</div>
	)
}

Player.propTypes = {
	label: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	profile: PropTypes.object.isRequired,
}

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error:null,
			winner: null,
			defeated: null,
			loading: true,
		}
	}

	componentDidMount() {
		let players = queryString.parse(this.props.location.search);

		api.battle([
			players.playerOneName,
			players.playerTwoName
		]).then(function(results) {
			if (results === null) {
				return this.setState(function() {
					return {
						error: 'Looks like there is an error, Check if both users exist on Github',
						loading: false,
					}
				});
			}

			this.setState(function() {
				return {
					error: null,
					winner: results[0],
					defeated: results[1],
					loading: false
				}
			});

		}.bind(this));

	}
	render() {
		let error = this.state.error;
		let winner = this.state.winner;
		let defeated = this.state.defeated;
		let loading = this.state.loading;

		if (loading === true) {
			return (
				<p>loading</p>
			)
		}

		if (error) {
			return (
				<div>
					<p>{error}</p>
					<Link to="/battle">Reset</Link>
				</div>
			)
		}

		return (
			<div className="row">
				<Player
					label='Winner'
					score={winner.score}
					profile={winner.profile} />

				<Player
					label='Defeated'
					score={defeated.score}
					profile={defeated.profile} />
			</div>
		)
	}
}

export default Results
