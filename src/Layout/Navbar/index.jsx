import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../Navbar/style.css";
import Logo from "../../assets/img/logoNavbar.png";

function NavbarMenu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-center">
        <div href="#home" className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Nav className="gap-3">
          <Nav.Link className="menu_items" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="menu_items" href="#features">
            About
          </Nav.Link>
          <Nav.Link className="menu_items" href="#pricing">
            Product
          </Nav.Link>
          <Nav.Link className="menu_items" href="#pricing">
            Contact
          </Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center">
          <NavDropdown
            title={<span className="custom-nav-title">EN</span>}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#">AZ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">RU</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">
            <FaInstagram />
          </Nav.Link>
          <Nav.Link href="#">
            <FaFacebookF />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
