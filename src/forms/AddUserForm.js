import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Card style={{ width: "35 rem", justifyContent: "center" }}>
        {" "}
        <div style={{ justifyContent: "center" }}>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!user.name || !user.username) {
                return null;
              }
              props.addUser(user);
              setUser(initialFormState);
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
            <Button>Add new user</Button>
          </form>
        </div>
      </Card>
    </>
  );
};
export default AddUserForm;
