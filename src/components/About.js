import React, { useState } from "react";
import about from "./data/about";
import OurTeam from "./OurTeam";
import "./style/about.css";
import team from "./data/team";

const About = () => {
  const ourTeam = useState(team)[0];
  return (
    <div className="about-section">
      <div className="about about-title">
        <h1>About Us</h1>
      </div>
      <div className="about about-msg container">
        <p>{about.p2}</p>
      </div>
      <div className="about about-msg container">
        <p>{about.p3}</p>
      </div>
      <div className="about about-msg container">
        <p>{about.p1}</p>
      </div>

      <div className="about about-title">
        <h1>Our Team</h1>
      </div>
      <div className="our-team-container row container">
        {ourTeam.map((teamMember) => (
          <OurTeam teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

export default About;
