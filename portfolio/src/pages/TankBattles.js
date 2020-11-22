import React from "react"
import "../styles/projectcard.css"
import SEO from "../components/seo"
import "../styles/general.css"
import "../styles/profile.css"
import TankBattlesImage from "../components/images/tankbattles"

import Profile from "../components/profile"
import ProjectCard from "../components/projectcard"
import AboutProjectCard from "../components/aboutprojectcard"
import FrontPageButton from "../components/frontpagebutton"
import ProjectGoBack from "../components/projectgoback"

const TankBattlesPage = () => (
  // <Layout>
//   <div className="wrapper">
<div>
    <ProjectGoBack title="TankBattles"></ProjectGoBack>
    <div className="projectdesc">
    <article>
        {/* <div> */}
    {/* <h1>
    CodEng
    </h1> */}
    <div className="abstract">
    Strategic 2D game where you balance the act 
    of defending your base while attacking the opponents at the same time. 
    
    </div>
    <a href="https://www.github.com/johfager/Game_made_in_C_plus_plus"> <button className="button button1">Source</button></a>
    <div className="projectprocess">
    The game was made from scratch in C++ with some help from SFML.
    Outside of creating the game itself, the project was an exercise in 
    using common building blocks from Object-Oriented Programming such as 
    inheritance and abstraction and combining to create something.
    Our idea came from a place of nostalgia as we missed the times of when local multiplayer
    was the only way you could play games with your friends. 
    Having a low learning curve where the rules are simple was also a big priority for us. 
    </div>


    <div className="projectimage" style={{ maxWidth: '450px'}}>
        <TankBattlesImage></TankBattlesImage>
    </div>
    </article>
    </div>
    </div>
)
export default TankBattlesPage