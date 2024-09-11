import React from "react";
import NavbarMenu from "../../../Layout/Navbar";
import Header from "../../../Components/Client/Heading";
import WineSection from "../../../Components/Client/WineSection";
import VodkaSection from "../../../Components/Client/VodkaSection";
import AboutSection from "../../../Components/Client/AboutSection";
import Contact from "../../../Components/Client/Contact";
import Footer from "../../../Layout/Footer";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="http://localhost:5173/" />
        <meta
          name="description"
          content="Merit Brand MMC, 2007-ci ildən Şabran, Azərbaycanda fəaliyyət göstərən müasir istehsalat müəssisəsidir. Yüksək keyfiyyətli məhsullar istehsal edir."
        />
        <meta name="robots" content="index, follow" />
        <title>Merit Brand Home Page (Gasarayev Emil)</title>
       
      </Helmet>
      <NavbarMenu />
      <Header />
      <WineSection />
      <VodkaSection />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
