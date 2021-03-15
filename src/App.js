import React, { useState } from 'react';
import PortfolioContainer from "../src/components/PortfolioContainer";
import './App.css';
// import NavBar from './components/NavBar';
// import About from "../src/components/pages/About"



function App() {
  const [categories] = useState([
    {
      name: "About",
      description:
        "A little information about Robert William Campagna",
    },
    { name: "Portfolio", description: "Important pieces of work" },
    { name: "Contact", description: "Contact information for Robert William Campagna" },
    {
      name: "Resume",
      description: "Robert William Campagna's resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
     <div>
     
       
     
     
      <PortfolioContainer
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></PortfolioContainer>
   
    

      </div>
        );
}

export default App;

