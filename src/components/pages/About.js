import React from 'react';
import peteImage from '../../images/me.jpg'

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'blue',
    padding: '0 20px',
  },
  content: {
    padding: 20,
    color: 'black'
  },
};

export default function About() {
  return (
    <div style={styles.content}>
      <h1>About Me</h1>
      <img id="peteImage" src={peteImage} alt="peteImage"></img>
      <p>
      I am a current Senior at the University of California, Los Angeles (UCLA) pursuing a degree in Political Science. I am also currently enrolled in the UC Berkely Extensions Full Stack Developer Boot Camp, and hope to persue product development in the tech industry when I complete my studies. I am currently seeking a role in web development, UX/UI design, software development, or Product Management. I enjoy playing tennis, woodworinking, hiking, and supporting the sports teams from my local San Francisco in my free time.
      </p>
    </div>
  );
}
