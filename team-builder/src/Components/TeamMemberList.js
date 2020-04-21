import React from "react";

const TeamMemberList = (props) => {
  return (
    <div className="member-list">
      {props.members.map((data) => (
        <div className="card" key={data.id}>
          <h1>Team Member List</h1>
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
          <h2>Role: {data.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberList;
