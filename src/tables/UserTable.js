import React from "react";
import { Card, Button } from "react-bootstrap";

const UserTable = props => {
  return (
    <>
      <Card style={{ width: "35 rem" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users && props.users.length > 0 ? (
              props.users.map(each => (
                <tr key={each.id}>
                  <td>{each.name}</td>
                  <td>{each.username}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      onClick={() => props.editUser(each)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="secondary"
                      onClick={() => props.deleteUser(each.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};
export default UserTable;
