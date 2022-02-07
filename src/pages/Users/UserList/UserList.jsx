import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userData } from "../../../dummyData";
import { Container, Table, Button } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleDelete = (id) => {
    const newUsersArray = users.filter((u) => u._id !== id);
    setUsers(newUsersArray);
  };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Users</h1>
        <Link to="/new-user">
          <Button variant="success">Create New</Button>
        </Link>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Username</th>
            <th>Email</th>
            <th>IsAdmin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <div className="longIdWrapper">{user._id}</div>
                <div>
                  <Link to={"/user/" + user._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(user._id)}
                  ></i>
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? (
                  <i className="fas fa-user-shield"></i>
                ) : (
                  <i className="fas fa-user standardUserIcon"></i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
