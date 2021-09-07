import React from "react";

// This is the action of the Portfolio Page
const Portfolio = () => (
  <div className="portfolio">
    <h1>Portfolio</h1>
    <section className="mycipePage">
      <div id="mycipeContainer">
     <a href="https://mycipe.herokuapp.com/">
       <img className="chefhat" src="https://i.imgur.com/UhQk31V.png" alt="myCipe app log"/>
     </a>
     <p>
       This is an appilication for chefs, an online database to store and share recipes.  Create a Chef Name. Create a recipe. Share recipe.  Each Chef will have their own Dashboard that will display their own personal recipes.  As a Guest, you may enjoy searching recipes and a Dashbaord with all recipes will be at your disposal.  Enjoy searching recipes!<br></br>
      </p>
      </div>
    <footer>Created with my partners<a href="https://www.linkedin.com/in/nick-huizar/"> Nick Huizar</a>, <a href="https://www.linkedin.com/in/erica-siegel-79427640/">Erica Siegle</a> and <a href="https://www.linkedin.com/in/naomi-lang-03b0751b8/">Naomi Lang</a>.</footer>
    </section>

    <section className="adaigoElement">
      <div id="adaigoContainer">
      <a href="https://siphon880gh.github.io/your-daily-portal-adaigo-element/">
        <img className="libra" src="https://i.imgur.com/N7bAPyS.png?1" alt="adaigoElementApp"/>
      </a>
      <p>
        A fun way to start your day!  AdaigoElement is a dashboard that provides your horoscope for the day, along with songs from your favorite artists!
      </p>
      </div>
      <footer>Created by: Robert, <a href="https://www.linkedin.com/in/weng-fung/">Weng</a> and <a href="https://www.linkedin.com/in/stephaniefreylersantana/">Stephanie</a>.</footer>
      </section>
     </div>

);

export default Portfolio;
