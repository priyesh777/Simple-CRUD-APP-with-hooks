import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditForm from "./forms/EditForm";
import { Badge } from "react-bootstrap";

const App = () => {
  const usersData = [
    { id: 1, name: "Priyesh", username: "Software Engineer" },
    { id: 2, name: "John", username: "mr_wick" },
    { id: 3, name: "John Bohnam", username: "god of drumming" }
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditMode(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = user => {
    setEditMode(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditMode(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <>
      <div className="container">
        <h1>
          <Badge variant="secondary">CRUD APP </Badge>
        </h1>
        <text>A simple web-application using React and Hooks</text>
      </div>{" "}
      <div className="container">
        <div className="flex-row ">
          <div className="flex-large mt-5">
            {editMode ? (
              <div>
                <h2>Edit user</h2>
                <EditForm
                  setEditMode={setEditMode}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large mt-5">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
