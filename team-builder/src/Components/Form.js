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
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={handleChanges} />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" onChange={handleChanges} />
      <button type="submit">Add Your Info</button>
    </form>
  );
};

export default Form;
