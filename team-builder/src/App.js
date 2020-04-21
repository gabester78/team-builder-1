import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./Components/Form";
import TeamMemberList from "./Components/TeamMemberList";

function App() {
  const [members, setMembers] = useState([
    {
      id: uuid(),
      name: "Gabriel Romero",
      email: "gabester78@gmail.com",
      role: "SwoleMaster",
    },
  ]);

  const addNewMember = (members) => {
    const newMember = {
      id: Date.now(),
      name: members.name,
      email: members.email,
      role: members.role,
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form addNewNote={addNewMember} />
      <TeamMemberList members={members} />
    </div>
  );
}

export default App;
