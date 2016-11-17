import React, { Component } from 'react'
import Header from './Header.js'
import PortfolioHeader from './Photography/PortfolioHeader.js'
import img1 from "../assets/photography/MichaelOladipo/img2.jpg"
import img2 from "../assets/photography/Kim/img1.jpg"
import img3 from "../assets/photography/Grace/img1.jpg"

import '../css/Photography.css'

class Photography extends Component {
  render() {
    return (
      <div className="PhotographyBody">
        <div className="PortfolioHeader">
          <PortfolioHeader/>
        </div>
        <div className="Imagecontainer">
          <img src={img1} className="Image"/>
          <img src={img2} className="Image"/>
          <img src={img3} className="Image"/>
        </div>
      </div>
    )
  }
}
export default Photography
