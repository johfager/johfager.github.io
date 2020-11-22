import React from "react"
import "../styles/projectcard.css"
import Image from "./images/image"
import {Button} from "react-bootstrap"
import SEO from "../components/seo"
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
    CSS,  React,  Ruby,  Express, Java, Python, C#, C++, Git </li>
    </ul>
    {/* <h3><b>Current Location:  </b></h3>
    Linköping/Uppsala, Sweden */}
    {/* <h3><b>Education:</b></h3> Bachelor Student at Faculty of Engineering LiTH
    <h3><b>Interests:</b></h3> Cooking, Music, Video Games
    <h3><b>Experience:</b></h3> CSS,  React,  Git,  Express, Python, C++, C#, Java</div> */}
    </div>
      </div>
    )
  }

export default AboutProjectCard