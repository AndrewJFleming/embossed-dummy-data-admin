import React, { useState } from "react";

import { Container, Form, Button } from "react-bootstrap";
import HomepageLinkModal from "../../shared/components/HomepageLinkModal/HomepageLinkModal";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <React.Fragment>
      <HomepageLinkModal />
      <Container className="mt-5">
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              value={formData.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              value={formData.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        <Button onClick={handleLogin}>Login</Button>
      </Container>
    </React.Fragment>
  );
};

export default Login;
