import React from "react"
import "../styles/projectcard.css"
import "../styles/profile.css"
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