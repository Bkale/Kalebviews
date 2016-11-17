import React, { Component } from 'react';
import { Link,  browserHistory } from 'react-router'
import '../css/Header.css'

class Header extends Component {
  componentDidMount() {
    const path = "/Home"
    browserHistory.push(path);
  }

  render() {
    return(
      <div className="container">
        <div className="linkbox"><Link to="/Home" className="links">Babajide Kale</Link></div>
        <div className="linkbox"><Link to="/DevPortfolio" className="links">Dev Portfolio</Link></div>
        <div className="linkbox"><Link to="/Photography" className="links">Photography</Link></div>
        <div className="linkbox"><Link to="/About" className="links">About</Link></div>
      </div>
    )
  }
}
export default Header
