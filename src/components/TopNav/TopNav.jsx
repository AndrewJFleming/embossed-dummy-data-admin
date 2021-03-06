import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./TopNav.css";

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleCollapse}>
          <span className="navLogoText">EMBOSSED Admin</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="myResponsive">
          <Nav>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/products"
                onClick={handleCollapse}
              >
                Products List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/new-product"
                onClick={handleCollapse}
              >
                <em>New Product</em>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/categories"
                onClick={handleCollapse}
              >
                Category List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/new-category"
                onClick={handleCollapse}
              >
                <em>New Category</em>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/users" onClick={handleCollapse}>
                Users List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/new-user"
                onClick={handleCollapse}
              >
                <em>New User</em>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sales" onClick={handleCollapse}>
                Sales List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/new-sale"
                onClick={handleCollapse}
              >
                <em>New Sale</em>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/carts" onClick={handleCollapse}>
              Carts List
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login" onClick={handleCollapse}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
