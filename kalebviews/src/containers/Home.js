import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import '../font-awesome/css/font-awesome.css'
import '../css/Home.css'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = ({
      currentTitle: "Full-Stack Developer",
      jobTitles: ["Full-Stack Developer", "Photographer", "Entrepreneur"],
      count: 1
    })
  }



  render(){
    return(
      <div className="HomeBody">
        <div className="Content">

          <h2>{this.state.currentTitle}</h2>

          <div className="logos">
            <a href="mailto:bkale09@gmail.com?Subject=Hi">
              <FontAwesome
                className='super-crazy-colors'
                name='envelope-o'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/babajidekale">
              <FontAwesome
                className='super-crazy-colors'
                name='linkedin'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></a>
            <a href="https://github.com/Bkale">
              <FontAwesome
                className='super-crazy-colors'
                name='github'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></a>
          </div>
       </div>
      </div>
    )
  }
}
export default Home
