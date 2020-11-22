import React from "react"
import { Link } from "gatsby"
import {Col, Row, Container} from "react-bootstrap"
// import Layout from "../components/layout"
// import Layout from "../styles/layout"
// import Image from "../components/images/image"
import "../styles/general.css"
import SEO from "../components/seo"
import Profile from "../components/profile"
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
    {/* </section> */}
  {/* </header> */}
  {/* </Layout> */}
  </div>
)
