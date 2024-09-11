import React from "react";
import NavbarMenu from "../../../Layout/Navbar";
import Header from "../../../Components/Client/Heading";
import WineSection from "../../../Components/Client/WineSection";
import VodkaSection from "../../../Components/Client/VodkaSection";
import AboutSection from "../../../Components/Client/AboutSection";
import Contact from "../../../Components/Client/Contact";
import Footer from "../../../Layout/Footer";


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
