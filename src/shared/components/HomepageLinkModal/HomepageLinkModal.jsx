import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal } from "react-bootstrap";

const HomepageLinkModal = () => {
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
            <em>You don't need to login to explore the demo.</em>
          </p>
          <p>
            Click below to skip to the&nbsp;
            <Link to="/">dashboard homepage</Link>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
          <Link className="btn btn-outline-primary" role="button" to="/">
            To dashboard
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomepageLinkModal;
