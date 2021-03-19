import React from "react";
import coverImage from "../assets/cover/cover-image.png";

//  This is the action for the Aboout Me page
function About() {
  return (
    <section>
      <div className="about">
  <h1 id="about">Lets Rock</h1>
  <img src={coverImage} className="mypic" alt="cover" />
  <p>
    Robert Campagna from Long Island, New York.  Father of twin boys Json and Mern.  Thats a nerd joke, my sons names are Oliver and Wesley.  Born to entertain with the love for baseball and hockey.  Cancer survivor.  I am competetive. I live life by this rule, "There are always two people for a job, you and the other guy.  F-ck the other guy."
  </p>
  <div className="teams">
  <p className="mets">Lets Go Mets</p><p className="isles">Lets Go Islanders</p>
  </div>
  </div>
</section>
  )
  }

export default About

