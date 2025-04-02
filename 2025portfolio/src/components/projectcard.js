import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/projectcard.css"; // Import the CSS file

function ProjectCard({ title, slug, thumbnail }) {
  return (
    <Link to={`/projects/${slug}/`} className="projectcard">
      {thumbnail ? (
        <GatsbyImage
          image={thumbnail}
          alt={`${title} thumbnail`}
          className="projectcard-thumbnail"
          objectFit="cover" // Ensures the image fills the container without distortion
          objectPosition="50% 50%" // Centers the image within the container
        />
      ) : (
        <div className="projectcard-no-thumbnail">
          <h1>{title}</h1>
        </div>
      )}
      <div className="projectcard-info">
        <h3 className="projectcard-title">{title}</h3>
      </div>
    </Link>
  );
}

export default ProjectCard;