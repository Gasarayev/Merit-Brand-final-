import React from "react";

import NavbarMenu from "../../../Layout/Client/Navbar";
import Footer from "../../../Layout/Client/Footer";
import ContactPageForm from "../../../Components/Client/ContactPageForm";
import ContactPageMap from "../../../Components/Client/ContactPageMap";
import Contact from "../../../Components/Client/Contact";


export const ContactPage = () => {
  

  return (
    <>
      <NavbarMenu />
      <ContactPageForm/>
      <ContactPageMap/>
      <Contact/>
      <Footer />
    </>
  );
};
