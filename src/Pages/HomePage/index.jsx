import React from "react";

import NavbarMenu from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import Header from "../../Components/Heading";
import AboutSection from "../../Components/AboutSection";
import WineSection from "../../Components/WineSection";
import VodkaSection from "../../Components/VodkaSection";
import Contact from "../../Components/Contact"

function HomePage() {
  return (
    <>
      <NavbarMenu />
      <Header />
      <WineSection />
      <VodkaSection />
      <AboutSection />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
