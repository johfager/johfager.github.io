import React from "react"
import "../styles/projectcard.css"
import SEO from "../components/seo"
import "../styles/general.css"
import "../styles/profile.css"

import Profile from "../components/profile"
import ProjectCard from "../components/projectcard"
import AboutProjectCard from "../components/aboutprojectcard"
import ProfileImage from "../components/images/profileimage"
import CodEngPython from "../components/images/codengpython"
import CodEngExample from "../components/images/codeng"
import FrontPageButton from "../components/frontpagebutton"
import ProjectGoBack from "../components/projectgoback"

const PortfolioPage = () => (
  // <Layout>
//   <div className="wrapper">
<div>
    <ProjectGoBack title="Portfolio"></ProjectGoBack>
    <div className="projectdesc">
    <article>
        {/* <div> */}
    {/* <h1>
    CodEng
    </h1> */}
    <div className="abstract">
    Portfolio created as a Single Page Application.      
    </div>
    <a href="https://www.github.com/johfager/johfager.github.io"> <button className="button button1">Source</button></a>
    <div className="projectprocess">
    The result is this webpage!
    Created with the help of Gatsby and React. After having created the
    extremely infamous "CatBook", I wanted to create a new portfolio using
    the tools of React. As soon as you want to repeat something within the 
    HTML/CSS world, React is a perfect tool with its usage of components. 
    It becomes much easier to dynamically create buttons, project pages and other 
    types of contents.
    </div>

{/* 
    <div className="img" style={{ maxWidth: '300px'}}>
        {/* <ProfileImage></ProfileImage> */}
        {/* <CodEngExample></CodEngExample> */}
        {/* <CodEngPython></CodEngPython> */}
    {/* </div> */}


    {/* <div className="img" style={{ maxWidth: '300px'}}>
    <ProfileImage />
    </div> */}
    </article>
    </div>
    </div>
)
export default PortfolioPage