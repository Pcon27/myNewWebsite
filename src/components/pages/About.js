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
        I am a current Senior at the University of California, Los Angeles (UCLA) pursuing a degree in Political Science. I am also currently enrolled in the UC Berkely Extensions Full Stack Developer Boot Camp, and hope to persue product development in the tech industry when I complete my studies. I am currently seeking a role in web development, UX/UI design, software development, or Product Management. I enjoy playing tennis, woodworinking, hiking, and supporting the sports teams from my local San Francisco in my free time.
        </p>
      </section>
    </div>
  );
}
