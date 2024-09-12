import React from "react";
import NavbarMenu from "../../../Layout/Client/Navbar";
import AboutPageHeader from "../../../Components/Client/AboutPageHeader";
import AboutSection from "../../../Components/Client/AboutSection";
import Contact from "../../../Components/Client/Contact";
import Footer from "../../../Layout/Client/Footer";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="http://localhost:5173/about-merit-brand" />
        <meta
          name="description"
          content="Merit Brand LLC, founded in 2007 in Shabran, Azerbaijan, utilizes modern equipment and favorable conditions to produce high-quality goods."
        />
        <meta name="robots" content="index,follow" />
        <title>Merit Brand About Page (Gasarayev Emil)</title>
      </Helmet>
      <NavbarMenu />
      <AboutPageHeader />
      <AboutSection />
      <Contact />
      <Footer />
    </>
  );
}

export default AboutPage;
