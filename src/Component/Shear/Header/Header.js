import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header ">
      <Navbar bg="dark" className="py-3" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="navbar-brand text-white" to="/">
              <span>
                <i className="fas fa-utensils text-danger"></i> Food
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink style={{ color: "white " }} className="link" to="/">
                Home
              </NavLink>
              <NavLink
                style={{ color: "white " }}
                className="link"
                to="/speciality"
              >
                Speciality
              </NavLink>
              <NavLink
                style={{ color: "white " }}
                className="link"
                to="/popular"
              >
                Popular
              </NavLink>
              <NavLink
                style={{ color: "white " }}
                className="link"
                to="/gallery"
              >
                Gallery
              </NavLink>
              <NavLink
                style={{ color: "white " }}
                className="link"
                to="/review"
              >
                Review
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
