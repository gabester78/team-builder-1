import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const initialTeamMembers = [
  {
    id: uuid(),
    fullName: "Gabe Romero",
    email: "gabester78@gmail.com",
    role: "Big Poppa Pump",
  },
];

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    role: "",
  });

  return <div className="App"></div>;
}

export default App;
