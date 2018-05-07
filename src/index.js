import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './views/Home';
import Battle from './views/Battle';
import Results from './views/Results';
import Popular from './views/Popular';

import './styles/index.scss';

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="container">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/battle" component={Battle} />
					<Route exact path="/battle/results" component={Results} />
					<Route path="/popular" component={Popular} />
					<Route render={function() {
						return( <p>Not Found</p>)
					}} />
				</Switch>

			</div>
		</Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
