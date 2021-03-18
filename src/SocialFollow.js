import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub, faLinkedin, faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
      <div className="social-container">
      <a href="https://github.com/RobertWilliamCampagna"
        className="github-icon">
        <FontAwesomeIcon icon={ faGithub } size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/robert-campagna-5a11181b7/"
        className="linkedin-icon">
          <FontAwesomeIcon icon={ faLinkedin } size="2x" />
      </a>
      <a href="https://www.instagram.com/campagna.robert/"
        className="instagram">
          <FontAwesomeIcon icon={ faInstagram } size="2x" />
      </a>
</div>

  
  );
}