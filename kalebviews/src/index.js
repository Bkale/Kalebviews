import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './containers/App';
import Home from './containers/Home'
import About from './containers/About'
import DevPortfolio from './containers/DevPortfolio'
import Photography from './containers/Photography'
import Overview from './containers/Photography/Overview.js'
import Portraits from './containers/Photography/Portraits.js'
import Events from './containers/Photography/Events.js'
import Instagram from './containers/Photography/Instagram.js'

import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/DevPortfolio" component={DevPortfolio} />
        <Route path="/Photography">
          <IndexRoute component={Overview} />
          <Route path="/Photography/Overview" component={Overview}></Route>
          <Route path="/Photography/Portraits" component={Portraits}></Route>
          <Route path="/Photography/Events" component={Events}></Route>
          <Route path="/Photography/Instagram" component={Instagram}></Route>
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
