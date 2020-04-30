import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const EditForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <Button>Update user</Button>{" "}
      <Button onClick={() => props.setEditMode(false)} variant="secondary">
        Cancel
      </Button>
    </form>
  );
};

export default EditForm;
