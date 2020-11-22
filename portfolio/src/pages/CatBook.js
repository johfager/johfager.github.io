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
import ReactPlayer from 'react-player'

const CatBookPage = () => (
  // <Layout>
//   <div className="wrapper">
<div>
    <ProjectGoBack title="CatBook"></ProjectGoBack>
    <div className="projectdesc">
    <article>
        {/* <div> */}
    {/* <h1>
    CodEng
    </h1> */}
    <div className="abstract">
    Social Media Application for Tigers, Lions, Cats and other felines.    
    </div>
    <a href="https://www.github.com/johfager/CatBook"> <button className="button button1">Source</button></a>
    <div className="projectprocess">
    Contrary to popular belief, cats need friends too. That's why 
    we created a social media application for anyone feline a bit lonely. We were certain that many cats 
    would be purrsuaded by this idea.
    We used ExpressJS/MongoDB for backend/database and React/Bootstrap for frontend. 
    The project was very successful 
    when it came to implementing functionality that is commonly seen within social media applications.
    One thing in particular worth noting is that we put a lot of time into only loading the content
    that is necessary at the moment. Sadly we did not have enough time for the frontend to have the aesthetics aligned with the 
    goals of the project.
    The result can be seen in the demo below.
    <ReactPlayer
    url="https://www.youtube.com/watch?v=sWqul0PI9DI&feature=youtu.be"
    width = "300px"
    height = "200px"
    />
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
export default CatBookPage