import React, { Component } from 'react'
import '../css/About.css'

class About extends Component {
  render() {
    return(
      <div className="AboutBody">
        <div className="col1">
        <h2>Im a Nigerian born FullStack Web Developer and Photographer.</h2>
        <p>I recieved my bachelors degree from William Paterson University in Computer Science. I continued my studies at General Assembly in NYC, joining the web emersive 3 month program. I love anything that involves creating, be it a clients idea for a project or a passion project of mine. </p>
        </div>
        <div className="col2">
          <h2>Im also a photographer, I'm never too far from my camera. I shoot every chance I get and I've taken up sereval projects along the way. I don't particularly have a preference, as my experience spans from Portraits, Pool Parties to Naming Ceremonies. </h2>
        </div>
      </div>
    )
  }
}
export default About
