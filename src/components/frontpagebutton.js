import React from "react"
import "../styles/projectcard.css"
import Image from "./images/image"
import {Button} from "react-bootstrap"
import ProfileImage from "./images/profileimage"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function FrontPageButton() {
    return (
    <div >
    <Link to="/">
    <button className="button button2">
    <FontAwesomeIcon icon={faArrowLeft} size="lg" margin="5%"/>
     </button>
    </Link>
        </div>
    )
  }

export default FrontPageButton