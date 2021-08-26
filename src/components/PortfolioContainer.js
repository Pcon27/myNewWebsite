import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  // this renders the component of the page we are currently on
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* the two props are the current page we are on, and the function to change the current page */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* this is a function that renders the page that we are currently on */}
      {renderPage()}
      <Footer/>
    </div>
  );
}
