import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import '../font-awesome/css/font-awesome.css'
import '../css/Home.css'

class Home extends Component {


  render() {
    return(
      <div className="HomeBody">
        <div className="Content">
          <h2>HI THERE, WELCOME TO MY SITE</h2>
          <p>LET'S TAKE A LOOK AROUND...</p>

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
