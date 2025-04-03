import React from "react"
import "../styles/general.css"
import ProjectCard from "../components/projectcard"
import AboutProjectCard from "../components/aboutprojectcard"
const IndexPage = () => (
  // <Layout>
  <div className="wrapper">
    <div  className="card">
    <div className="img" style={{ maxWidth: '300px'}}>
        </div>
        <AboutProjectCard></AboutProjectCard>
        <SocialMedia></SocialMedia>
        </div>
      <AboutProjectCard></AboutProjectCard>
      <ProjectCard title="CodEng"></ProjectCard>
      <ProjectCard title="Tank Battles"></ProjectCard>
      <ProjectCard title="CatBook"></ProjectCard>
  </div>
)
