import React from "react"
import "../styles/projectcard.css"
import "../styles/profile.css"

import Image from "./images/image"
import {Button} from "react-bootstrap"
import ProfileImage from "./images/profileimage"
import { Link } from 'gatsby'
import FrontPageButton from "../components/frontpagebutton"

function ProjectGoBack(props) {
    return (
        <div className="gobackcard">
        <h1>
        {props.title}
        </h1>
        <FrontPageButton></FrontPageButton>
        </div>

    )
  }

export default ProjectGoBack