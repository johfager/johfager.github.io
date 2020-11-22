import React from "react"
import "../styles/profile.css"
import ProfileImage from "./images/profileimage"
import {FacebookShareButton, FacebookIcon} from "react-share";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import SocialMedia from "./socialmedia"
import AboutProjectCard from "../components/aboutprojectcard"

function TitleCard(){
    function toggle() {
        var card = document.querySelector('.card');
        card.addEventListener( 'click', function() {
        // card.classList.toggle('is-flipped');
        });
        // cardfront.getPropertyValue("display") = "none";

    }


    return (
    <div className="card">

    </div>
    )
}
export default TitleCard