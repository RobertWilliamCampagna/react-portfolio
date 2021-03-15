import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
      <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://github.com/"
        className="github-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
</div>
  
  );
}