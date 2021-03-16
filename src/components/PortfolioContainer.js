import React, { useState } from 'react';
import NavBar from './NavBar';
import Portfolio from './pages/Portfolio';
import About from '../components/pages/About';
import Resume from './pages/Resume';
import Contact from '../components/pages/Contact';
import Footer from '../components/Footer'


function PortfolioPage() {
  const [currentPage, handlePageChange] = useState('About');
console.log(currentPage);
  const renderPage = () => {
    //  switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "About":
        return <About />
      case "Portfolio":
        return <Portfolio />
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />
    
    
      default:
        break;
    }
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}  />
    </div>
  );
}


export default PortfolioPage;
