import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import App from './containers/App';
import Home from './containers/Home'
import About from './containers/About'
import DevPortfolio from './containers/DevPortfolio'
import Photography from './containers/Photography'
import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/DevPortfolio" component={DevPortfolio} />
        <Route path="/Photography" component={Photography} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
