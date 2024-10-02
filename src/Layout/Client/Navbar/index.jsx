import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../../assets/img/logoNavbar.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "../Navbar/style.css";

function NavbarMenu() {
  const { t } = useTranslation();
  

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};


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
            {t("homepage")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about-merit-brand" className="menu_items">
            {t("about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="menu_items">
            {t("products")}
            </Nav.Link>

            <Nav.Link as={Link} to={"/contact-us"} className="menu_items">
            {t("contact")}
            </Nav.Link>

            <NavDropdown
              className="lang_mobile"
              title={<span onClick={() => changeLanguage("en")} className="custom-nav-title">English</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => changeLanguage("az")}>Azerbaijan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => changeLanguage("ru")}>Russian</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="icon_mobile_version d-flex align-items-center justify-content-center">
            <NavDropdown
              className="lang_desc_version"
              
              title={<span onClick={() => changeLanguage("en")} className="custom-nav-title">EN</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => changeLanguage("az")}>AZ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => changeLanguage("ru")}>RU</NavDropdown.Item>
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

export default React.memo(NavbarMenu);
