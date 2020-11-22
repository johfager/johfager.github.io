import React from "react"
import "../styles/projectcard.css"
import "../styles/socialmedia.css"

import { Link } from 'gatsby'

import Image from "./images/image"
import {Button} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


function SocialMedia(props) {
    function openTab(url){
        window.open(url);
    }
    return (
      
   <div className="socialmedia">
    {/* <Link to={"https://www.facebook.com"}>FontAwesomeIcon icon={faFacebook} size="2x" /></Link> */}
    <a className="icons" href="./../documents/F1_tavla.pdf"><FontAwesomeIcon icon={faFileAlt} size="lg" /></a>

   <a className="icons" href="mailto:johannes.fagerberg@hotmail.com"><FontAwesomeIcon icon={faAt} size="lg" /></a>
   {/* PUT IN GOOGLE DRIVE LINK HERE BELOW */}
    <a className="icons" href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
    <a className="icons" href="https://www.github.com/johfager"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
    <a className="icons" href="https://www.linkedin.com/in/johannes-fagerberg-8263931a3/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>

    </div>
    )
  }

export default SocialMedia