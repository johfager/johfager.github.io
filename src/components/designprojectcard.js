import React from "react"
import "../styles/projectcard.css"

import { Link } from 'gatsby'

function DesignProjectCard(props) {
    return (

      <div className="projectcard" style={{backgroundColor: "#43292D"}}>
      <Link to={"/" + props.title}>
      <h2 className="projecttitle">
        {props.title}
         </h2>
      </Link>
     </div>


    )
  }

export default DesignProjectCard