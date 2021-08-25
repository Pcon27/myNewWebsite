import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

// We are able to use object deconstruction by dividing props into two seperate items

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          // ternery operator, checking to see if we are on the homepage

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          // this is checking to see if we are on the 'about' page, if we are, the nav link to the 'about' page is active. if not, the nav bar won't take you to the 'about' page

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          // this is checking to see if we are on the 'blog' page, if we are, the nav link to the 'about' page is active. if not, the nav bar won't take you to the 'blog' page
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
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
  );
}

export default NavTabs;
