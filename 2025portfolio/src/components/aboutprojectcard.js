import React from "react"
import "../styles/projectcard.css"
function AboutProjectCard(props) {
    return (
    <div>
    <div className="projecttext">
    <h2 className="about">
    About
    </h2>
    <ul className="about">
    <li><h3>Current Location</h3>
    Linköping/Uppsala, Sweden</li>
    <li><h3>Education:</h3> 
    Bachelor Student at Faculty of Engineering LiTH</li>
    <li><h3>Interests:</h3> 
    Cooking, Music, Video Games</li>
    <li><h3>Experience:</h3> 
    CSS,  React, Figma, C#, Python, Java,  C++, Git </li>
    </ul>
    </div>
      </div>
    )
  }

export default AboutProjectCard