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
import {Button} from "react-bootstrap"
const CodEngPage = () => (

<div>
    <ProjectGoBack title="CodEng"></ProjectGoBack>
    <div className="projectdesc">
    <article>

    <div className="abstract">
    Created a new programming language 
    with Ruby.    
    </div>
    <a href="https://www.github.com/johfager/CodEng"> <button className="button button1">Source</button></a>
    <div className="projectprocess">
    The goal of the project was for the language to be used
    in a way that mimics how someone would explain code in 
    "pseudocode-like" terms. The English language has 
    plenty of examples when it comes to expressing similar ideas
    with drastically different sentences and words. Examples of
    things that we had to do is creating syntax using Backus Naur form and
    building tools for saving variables, creating functions and member functions of datatypes. 
    Below is a simple example of our language compared to Python.
    </div>

    <div className="projectimage" style={{ maxWidth: '1000px'}}>
        <CodEngExample></CodEngExample>
    </div>
    </article>
    </div>
    </div>
)
export default CodEngPage