import React, { useState } from 'react';
import NavBar from './NavBar';
import Portfolio from './pages/Portfolio';
import About from '../components/pages/About';
import Resume from './pages/Resume';
import Contact from '../components/pages/Contact';


function PortfolioPage() {
  const [currentPage, handlePageChange] = useState('About');
console.log(currentPage);
  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
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
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

//   return (
//     <div>
//       <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
//       <div>
//         {
//           // Render the component returned by 'renderPage()'
//           // YOUR CODE HERE
//           <div>{renderPage(currentPage)}</div>
//         }
//       </div>
//     </div>
//   );
// }

export default PortfolioPage;
