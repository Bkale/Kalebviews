import React, { Component } from 'react'
import PortfolioHeader from './PortfolioHeader.js'
import img1 from "../../assets/photography/MichaelOladipo/img2.jpg"
import img2 from "../../assets/photography/Kim/img1.jpg"
import img3 from "../../assets/photography/Grace/img1.jpg"
import img4 from "../../assets/photography/Tevin/img1.jpg"
import img5 from "../../assets/photography/Gabby/img2.jpg"
import img6 from "../../assets/photography/Kim/img2.jpg"
import img7 from "../../assets/photography/Eanin/img1.jpg"

import "../../css/Photography.css"

class Portraits extends Component{
  render(){
    return(
      <div className="PhotographyBody">
        <div className="PortfolioHeader">
          <PortfolioHeader/>
        </div>
        <div className="Imagecontainer">
          <img src={img1} className="Image"/>
          <img src={img2} className="Image"/>
          <img src={img3} className="Image"/>
          <img src={img4} className="Image"/>
          <img src={img5} className="Image"/>
          <img src={img6} className="Image"/>
          <img src={img7} className="Image"/>
        </div>
      </div>
    )
  }
}
export default Portraits
