import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../utils/api';

// class SelectedLanguage extends Component {
//   render() {
//     var languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];
//
//     return (
//       <ul className="languages">
//         {languages.map(function(lang) {
//           return (
//             <li
//               style={ lang === this.props.selectedLanguage ? { color: '#d0021d' } : null}
//               key={lang}
//               onClick={this.props.onSelect.bind(null, lang)}>
//               {lang}
//             </li>
//           )
//         }, this)}
//       </ul>
//     )
//   }
// }

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
      api.fetchPopularRepos().then(function(res) {
        console.log(res);
      });
  }

  updateLanguage(lang) {
    this.setState(function() {
    return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

export default Popular
