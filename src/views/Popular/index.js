import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoGrid from './components/RepoGrid';
import Loading from '../../components/Loading';

import api from '../../utils/api';
import './popular.css';

function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];

  return (
    <ul className="languages">
      {languages.map(function(lang) {
        return (
          <li
            style={ lang === props.selectedLanguage ? { color: '#d0021d' } : null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      }, this)}
    </ul>
  )
}

// function RepoGrid(props) {
// 	return (
// 		<ul className="popular-list">
// 			{props.repos.map(function(repo, index) {
// 				return(
// 					<li key={repo.name} className="popular-item">
// 						<div className="popular-rank">#{index + 1}</div>
// 						<ul className="space-list-items">
// 							<li>
// 								<img
// 									className="avatar"
// 									src={repo.owner.avatar_url}
// 									alt={'Avatar for' + repo.owner.login}
// 								/>
// 							</li>
// 							<li><a href={repo.html_url}>{repo.name}</a></li>
// 							<li>@{repo.owner.login}</li>
// 							<li>{repo.stargazers_count} stars</li>
// 						</ul>
// 					</li>
// 				)
// 			})}
// 		</ul>
// 	)
// }
//
// RepoGrid.propTypes = {
// 	repos: PropTypes.array.isRequired,
// }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
      // Make ajax request to fetch some data
      this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
    return {
        selectedLanguage: lang,
		repos: null
      }
    });

	api.fetchPopularRepos(lang).then(function(repos) {
	  this.setState(function() {
		  return {
			  repos: repos
		  }
	  });
  	}.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />

        {!this.state.repos ? <Loading />
		  : <RepoGrid repos={this.state.repos} /> }

      </div>
    )
  }
}

export default Popular
