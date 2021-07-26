import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar className="HomePageNavbar" variant="dark" expand="lg">
        <Navbar.Brand className="BrandName">The Solo Chef</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto " style={{ maxHeight: "100px" }}>
            <Nav.Link as={Link} to={"/"}>
              <span className="navLinks">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to={"/aboutRecipes"}>
              <span className="navLinks">What are Recipies</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;