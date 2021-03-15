import React from "react";

const Portfolio = () => (
  <div className="portfolio">
    <h1>Portfolio</h1>
   <div className="port-page">
     <a href="https://mycipe.herokuapp.com/">
       <img className="chefhat" src="https://i.imgur.com/UhQk31V.png" alt="myCipe app log"/>
     </a>
     <div>
     <p>
       This is an appilication for chefs, an online database to store and share recipes.  Create a Chef Name. Create a recipe. Share recipe.  Each Chef will have their own Dashboard that will display their own personal recipes.  As a Guest, you may enjoy searching recipes and a Dashbaord with all recipes will be at your disposal.  Enjoy searching recipes!<br></br>
 
      </p>
      <footer>Created with my partners<a href="https://github.com/nrhuizar"> Nick Huizar</a>, <a href="https://github.com/ericasiegel">Erica Siegle</a> and <a href="https://github.com/naomiilang">Naomi Lang</a>.</footer>
     </div>
   </div>
  </div>
);

export default Portfolio;
