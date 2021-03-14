import React from "react";

const OurTeam = ({ teamMember }) => {
  return (
    <div className="our-team-card col-lg-4 col-md-6 col-sm-12">
      <div className="our-team-member our-team-img">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
          alt="..."
        ></img>
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
