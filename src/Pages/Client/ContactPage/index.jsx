import React from "react";
import NavbarMenu from "../../../Layout/Client/Navbar";
import Footer from "../../../Layout/Client/Footer";
import ContactPageForm from "../../../Components/Client/ContactPageForm";
import ContactPageMap from "../../../Components/Client/ContactPageMap";
import Contact from "../../../Components/Client/Contact";
import { Helmet } from "react-helmet";

export const ContactPage = () => {
  console.log("ContactPage Component Loaded");

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`http://localhost:5173/contact-us`}
        />
        <meta
          name="description"
          content="Merit Brand LLC, founded in 2007 in Shabran, Azerbaijan, utilizes modern equipment and favorable conditions to produce high-quality goods."
        />
        <meta name="robots" content="index, follow" />
        <title>Merit Brand Product Details Page (Gasarayev Emil)</title>
      </Helmet>

      <NavbarMenu />
      <ContactPageForm />
      <Contact />
      <ContactPageMap />
      <Footer />
    </>
  );
};
