import React, { Component } from 'react'
import PortfolioHeader from './PortfolioHeader.js'
import img1 from '../../assets/photography/Kim/img1.jpg'
import img2 from '../../assets/photography/Kim/img2.jpg'
import img3 from '../../assets/photography/Kim/img3.jpg'
import img4 from '../../assets/photography/Eanin/img1.jpg'
import img5 from '../../assets/photography/Eanin/img2.jpg'
import img6 from '../../assets/photography/Grace/img1.jpg'
import img7 from '../../assets/photography/Grace/img2.jpg'
import img8 from '../../assets/photography/Gabby/img1.jpg'
import img9 from '../../assets/photography/Gabby/img2.jpg'
import img10 from '../../assets/photography/Meagan/img1.jpg'
import img11 from '../../assets/photography/Meagan/img2.jpg'
import img12 from '../../assets/photography/Meagan/img3.jpg'
import img13 from '../../assets/photography/MichaelOladipo/img1.jpg'
import img14 from '../../assets/photography/MichaelOladipo/img2.jpg'
import img15 from '../../assets/photography/MichaelOladipo/img3.jpg'
import img16 from '../../assets/photography/MichaelOladipo/img4.jpg'

import "../../css/Photography/Overview.css"


class Overview extends Component{
  render(){
    return(
      <div className="PhotographyBody">
        <div className="PortfolioHeader">
          <PortfolioHeader/>
        </div>
        <div>
          <ul className="gridContainer">
              <li className="gridlist">
                <a className="href" href={img1}><img className="images" src={img1}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img2}><img className="images" src={img2}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img3}><img className="images" src={img3}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img4}><img className="images" src={img4}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img5}><img className="images" src={img5}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img6}><img className="images" src={img6}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img7}><img className="images" src={img7}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img8}><img className="images" src={img8}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img9}><img className="images" src={img9}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img10}><img className="images" src={img10}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img11}><img className="images" src={img11}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img12}><img className="images" src={img12}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img13}><img className="images" src={img13}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img14}><img className="images" src={img14}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img15}><img className="images" src={img15}/></a>
              </li>
              <li className="gridlist">
                <a className="href" href={img16}><img className="images" src={img16}/></a>
              </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Overview
