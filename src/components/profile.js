import React from "react"
import "../styles/profile.css"
import ProfileImage from "./images/profileimage"
import SocialMedia from "./socialmedia"
import AboutProjectCard from "../components/aboutprojectcard"
function Profile(){

    return (
    <div  className="card">
        <div className="img" style={{ maxWidth: '300px'}}>
        <ProfileImage />
        </div>
        <AboutProjectCard></AboutProjectCard>
        <SocialMedia></SocialMedia>
        </div> 
    )
}
export default Profile
