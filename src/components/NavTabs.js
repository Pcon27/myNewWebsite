import React from 'react';
import resume from '../images/Consagra.Peter.Resume.09.12.21docx.pdf'
import "../stylesheets/navbar.css"

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
              
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href={resume}
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
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
