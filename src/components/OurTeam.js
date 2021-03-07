import React from "react";
import "./style/ourTeam.css";

const OurTeam = ({ teamMember }) => {
  return (
    <div className="our-team-card col-4">
      <div className="our-team-member our-team-img">
        <img src={teamMember.image} alt="..."></img>
      </div>
      <div className="our-team-member our-team-detail">
        <div>
          {teamMember.first_name} {teamMember.last_name}
        </div>
        <div>{teamMember.email}</div>
        <div>{teamMember.company_name}</div>
      </div>
    </div>
  );
};

export default OurTeam;
