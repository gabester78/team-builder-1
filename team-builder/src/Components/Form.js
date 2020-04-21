import React, { useState } from "react";

const Form = (props) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    console.log(newMember);
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={handleChanges} />
      <button type="submit">Add Your Info</button>
    </form>
  );
};

export default Form;
