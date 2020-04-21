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
      role: "Swole Master Flex",
    },
  ]);

  const addNewMember = (data) => {
    const newMember = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role,
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <TeamMemberList members={members} />
    </div>
  );
}

export default App;
