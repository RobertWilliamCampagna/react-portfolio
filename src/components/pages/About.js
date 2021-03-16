import React from "react";
import coverImage from "../assets/cover/cover-image.png";

//  This is the action for the Aboout Me page
function About() {
  return (
    <section>
      <div className="about">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="mypic" alt="cover" />
  <p>
    Robert Campagna from Long Islang, New York.  Father of twin boys Oliver and Wesley.  Born entertainer with the love for baseball and hockey.  Cancer survivor.  I am competetive. I live life by this rule, "There are always two people for a job, you and the other guy.  F--K the other guy."
  </p>
  </div>
</section>
  )
  }

export default About

