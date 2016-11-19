import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import '../../css/Photography.css'

class PortfolioHeader extends Component {

  render() {
    return(
      <div>
        <div><Link to="/Photography/Overview" className="PortfolioHeaderLinks">Overview</Link></div>
        <div><Link to="/Photography/Portraits" className="PortfolioHeaderLinks">Portraits</Link></div>
        <div><Link to="/Photography/Events" className="PortfolioHeaderLinks">Events</Link></div>
        <div><Link to="/Photography/Instagram" className="PortfolioHeaderLinks">Instagram</Link></div>
      </div>
    )
  }
}
export default PortfolioHeader
