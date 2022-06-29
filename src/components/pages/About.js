import React from 'react';
import peteImage from '../../images/me.jpg'
import "../../stylesheets/about.css"


export default function About() {
  return (
    <div className="div">
      <h1 id="title">About Me</h1>
      <section className="info">
        <img id="peteImage" src={peteImage} alt="peteImage"></img>
        <p>
        Recent UCLA graduate with a certificate in web-development, and a B.A. in political science, pursuing a career in product development. Effective at combining creativity and problem solving to develop user-friendly applications. Known to have a strong interest in intuitive user stories and product UX. 
        
        </p>
      </section>

    </div>
  );
}
