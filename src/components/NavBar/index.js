import React from 'react';
import "../NavBar/style.css";


function NavBar(props) {
        const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
        return (
          <ul className="nav-tabs">
            {tabs.map(tab => (
              <li className="nav-item" key={tab}>
                <a
                  href={'#' + tab.toLowerCase()}
                  // Whenever a tab is clicked on,
                  // the current page is set through the handlePageChange props.
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        );
      }
      
      export default NavBar;
