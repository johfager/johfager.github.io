import React from "react"
import "../styles/profile.css"
import ProfileImage from "./images/profileimage"
import {FacebookShareButton, FacebookIcon} from "react-share";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import SocialMedia from "./socialmedia"
import AboutProjectCard from "../components/aboutprojectcard"
import TitleCard from "./titlecard"
function Profile(){
    function toggle() {
        var card = document.querySelector('.card');
        card.addEventListener( 'click', function() {
        // card.classList.toggle('is-flipped');
        });
        // cardfront.getPropertyValue("display") = "none";

    }


    return (
    // <div className="header">
    // <header>
    <div  className="card">
        <div className="img" style={{ maxWidth: '300px'}}>
        <ProfileImage />
        </div>
        <AboutProjectCard></AboutProjectCard>
        <SocialMedia></SocialMedia>
        </div>
    // </header>
        
    )
        {/* </div> */}
        {/* <div className="card__face--back">
        <div className="img" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ProfileImage />
        </div>
        <p>Harvard University</p> */}
            {/* Social media links */}
            
            {/* <div>
            <a href="twitter.com"><i className="fa fa-dribbble">twitter</i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
    
            </div> */}
        {/* } */}

 
    // </div>)y
}
export default Profile
