import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../Navbar/style.css";
import Logo from "../../../assets/img/logoNavbar.png";
// import AboutPage from "../../Pages/Client/AboutPage";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="pe-2 ps-2"
    >
      <div className="logo logo_desktop">
        <Nav.Link as={Link} to="/">
          <img src={Logo} alt="logo" />
        </Nav.Link>
      </div>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container className="mobile_version d-flex justify-content-between align-center">
          <div className="logo logo_mobile">
          <Nav.Link as={Link} to="/">
            <img src={Logo} alt="logo" />
            </Nav.Link>
          </div>
          <Nav className="mobile_menu_list gap-3">
            <Nav.Link as={Link} to="/" className="menu_items">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-merit-brand" className="menu_items">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="menu_items">
              Product
            </Nav.Link>

            <Nav.Link as={Link} to={"/contact-us"} className="menu_items">
              Contact
            </Nav.Link>

            <NavDropdown
              className="lang_mobile"
              title={<span className="custom-nav-title">English</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>Azerbaijan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Russian</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="icon_mobile_version d-flex align-items-center justify-content-center">
            <NavDropdown
              className="lang_desc_version"
              title={<span className="custom-nav-title">EN</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">AZ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">RU</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <FaInstagram />
            </Nav.Link>
            <Nav.Link>
              <FaFacebookF />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMenu;
