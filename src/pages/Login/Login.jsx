import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container, Form, Button, Modal } from "react-bootstrap";
import { signin } from "../../redux/actions/auth";
import ErrorPrompt from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { CLEAR_AUTH_ERROR } from "../../redux/constants/actionTypes";

function Example() {
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Welcome to the Embossed Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is the demo version of the admin dashboard which uses dummy
            data instead of MongoDB data.
          </p>
          <p>
            <em>
              Click below to skip to the&nbsp;
              <Link to="/">dashboard homepage</Link>.
            </em>
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Link className="btn btn-outline-info" role="button" to="/">
            To dashboard
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Login = ({ errorStatus }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    dispatch({ type: CLEAR_AUTH_ERROR });
  }, []);

  useEffect(() => {
    setTimeout(function () {
      dispatch({ type: CLEAR_AUTH_ERROR });
    }, 3000);
  }, [errorStatus, dispatch]);

  return (
    <React.Fragment>
      <Example />
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
        {errorStatus && <ErrorPrompt h5="Login Error:" h6={errorStatus} />}
      </Container>
    </React.Fragment>
  );
};

export default Login;
