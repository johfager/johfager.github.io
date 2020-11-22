import React from "react"
import "../styles/projectcard.css"

import { Link } from 'gatsby'

function ProjectCard(props) {
    return (

      <div className="projectcard">
      <Link to={"/" + props.title}>
      <h2 className="projecttitle">
        {props.title}
         </h2>
      </Link>
     </div>


    )
  }

export default ProjectCard