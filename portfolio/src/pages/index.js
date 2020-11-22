import React from "react"
import { Link } from "gatsby"
import {Col, Row, Container} from "react-bootstrap"
import "../styles/general.css"
import SEO from "../components/seo"
import Profile from "../components/profile"
import ProjectCard from "../components/projectcard"
import AboutProjectCard from "../components/aboutprojectcard"
const IndexPage = () => (
  // <Layout>
  <div className="wrapper">
    <Profile ></Profile>
    <ProjectCard title="Portfolio"></ProjectCard>
    <ProjectCard title="TankBattles"></ProjectCard>
    <ProjectCard title="CatBook"></ProjectCard>
    <ProjectCard title="CodEng"></ProjectCard>


    {/* </section> */}
  {/* </header> */}
  {/* </Layout> */}
  </div>
)

export default IndexPage
