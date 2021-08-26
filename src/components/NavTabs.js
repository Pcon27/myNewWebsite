import React from 'react';
import resume from '../images/Consagra.Peter.Resume.pdf'
import "../stylesheets/navbar.css"

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

// We are able to use object deconstruction by dividing props into two seperate items

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div>
      <section className="wtf">
        <ul className="nav nav-tabs">
        <h1 className="name">Peter Consagra</h1>
          <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                // ternery operator, checking to see if we are on the homepage

                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href={resume}
                onClick={() => handlePageChange('Resume')}
                //  TODO: Add a comment explaining what this logic is doing

                // this is checking to see if we are on the 'blog' page, if we are, the nav link to the 'about' page is active. if not, the nav bar won't take you to the 'blog' page
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                //  TODO: Add a comment explaining what this logic is doing
                // this is checking to see if we are on the 'contact' page, if we are, the nav link to the 'about' page is active. if not, the nav bar won't take you to the 'contact' page
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
        </ul>
        </section>
    </div>
  );
}

export default NavTabs;
