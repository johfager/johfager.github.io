import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute icons evenly */
  gap: 0.5rem; /* Space between icons */
  margin-top: 1rem;
  width: 200px; /* Match the width of the profile logo */
`;

const SocialIcon = styled(FontAwesomeIcon)`
  width: 40px; /* Divide the width of the container (300px) by 4 icons */
  height: 40px; /* Maintain a square aspect ratio */
  color: #333; /* Default color */
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.2); /* Slight zoom effect on hover */
    color: #0077b5; /* Change color on hover */
  }
`;

function SocialMedia() {
  return (
    <SocialMediaContainer>
      <a href="https://drive.google.com/file/d/1AbVhw7OQIfBVT_BZfOQgxNLZcbrGRg-i/view?usp=sharing">
        <SocialIcon icon={faFileAlt} />
      </a>
      <a href="mailto:johannes.fagerberg@hotmail.com">
        <SocialIcon icon={faAt} />
      </a>
      <a href="https://www.github.com/johfager">
        <SocialIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/johannes-fagerberg-8263931a3/">
        <SocialIcon icon={faLinkedin} />
      </a>
    </SocialMediaContainer>
  );
}

export default SocialMedia;