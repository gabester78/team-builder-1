import React, { useState } from "react";

const Form = (props) => {
  //   console.log(props);
  const [newMembers, setNewMembers] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    setNewMembers({ ...newMembers, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(newMembers);
    setNewMembers({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={newMembers.name}
      />

      <br></br>

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={newMembers.email}
      />

      <br></br>

      <label htmlFor="role">Role: </label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={newMembers.role}
      />

      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
