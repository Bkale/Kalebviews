import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import img1 from '../assets/projects/DrinksOnUs.png'
import img2 from '../assets/projects/MediaHub.png'
import img3 from '../assets/projects/Timeline.png'
import '../css/DevPortfolio.css'

class DevPortfolio extends Component {
  constructor(){
    super();
    this.state={
      slideIndex: 1
    }
  }
    setCarouselData(e,ref) {
      const mixin = [Carousel.ControllerMixin][0].setCarouselData
      return(
        mixin
      )
    }
    componentDidMount(){
      this.setState({
        slideIndex:0
      })
    }

    render() {
      return (
        <div className="DevPortfolioBody">
          <Carousel className="carousel"
            ref="carousel"
            data={(e)=> this.setCarouselData(e,"carousel")}
            slideIndex={this.state.slideIndex}
            afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>

            <div className="pContainer">
              <img src={img1} className="projectImages"/>
              <section className="projectDetail">
                <h1>DrinksOnUs</h1>
                <p>This web application uses the Absolute API, which allows the user to search for information on
                    drinks either by name or base liquor. In addition, it allows for user authentication, so each user can
                    create an account, login and save any drink to their account.<br></br>
                    <b>Technologies used:</b> React, React Router, Materialize, CSS, HTML</p>
              </section>
            </div>

            <div className="pContainer">
              <img src={img2} className="projectImages"/>
              <section className="projectDetail">
                <h1>Timeline</h1>
                <p>Timeline is a web application that reaches out New York Times and Youtube API to create a visual
                   representation of current events in that time time period. The user simply types in a word and picks a year,
                   the results are news articles and videos(if available in the time period) relating to that search word.<br></br>
                  <b>Technologies used:</b> React, React Router, CSS,Ruby on Rails,API calls</p>
              </section>
            </div>

            <div className="pContainer">
              <img src={img3} className="projectImages"/>
              <section className="projectDetail">
                <h1>Mediahub</h1>
                <p>Designed this web application that uses Spotify api to stream 30 sec previews of an artists top songs. It also allows
                   users to connect to their individual Instagram account and save their pictures to MongoDB.<br></br>
                 <b>Technologies used:</b>  HTML, CSS, JavaScript, node.js, jQuery, Instragram API, MongoDB, OAuth request</p>
              </section>
            </div>
          </Carousel>
        </div>
      )
    }
}
export default DevPortfolio
