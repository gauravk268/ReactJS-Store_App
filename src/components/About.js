import React from 'react';
import about from './data/about';
import "./style/about.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about about-title" ><h1>About Us</h1></div>
      <div className="about about-msg container"><p>{about.p2}</p></div>
      <div className="about about-msg container"><p>{about.p3}</p></div>
      <div className="about about-msg container"><p>{about.p1}</p></div>
    </div>
  );
}

export default About;
