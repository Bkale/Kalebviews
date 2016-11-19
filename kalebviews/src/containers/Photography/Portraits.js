import React, { Component } from 'react'
import PortfolioHeader from './PortfolioHeader.js'
import img1 from "../../assets/photography/MichaelOladipo/img2.jpg"
import img2 from "../../assets/photography/Kim/img1.jpg"
import img3 from "../../assets/photography/Grace/img1.jpg"
import img4 from "../../assets/photography/Tevin/img1.jpg"
import img5 from "../../assets/photography/Gabby/img2.jpg"
import img6 from "../../assets/photography/Kim/img2.jpg"
import img7 from "../../assets/photography/Eanin/img1.jpg"

import "../../css/Photography/Portraits.css"

class Portraits extends Component{
  render(){
    return(
      <div className="PortraitsBody">
        <div className="PortfolioHeader">
          <PortfolioHeader/>
        </div>
        <div className="PortraitsImagecontainer">
          <img src={img1} className="PortraitsImage"/>
          <img src={img2} className="PortraitsImage"/>
          <img src={img3} className="PortraitsImage"/>
          <img src={img4} className="PortraitsImage"/>
          <img src={img5} className="PortraitsImage"/>
          <img src={img6} className="PortraitsImage"/>
          <img src={img7} className="PortraitsImage"/>
        </div>
      </div>
    )
  }
}
export default Portraits
