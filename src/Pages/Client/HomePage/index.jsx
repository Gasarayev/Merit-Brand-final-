import React from "react";
import NavbarMenu from "../../../Layout/Navbar";
import Header from "../../../Components/Client/Heading";
import WineSection from "../../../Components/Client/WineSection";
import VodkaSection from "../../../Components/Client/VodkaSection";
import Contact from "../../../Components/Client/Contact";
import Footer from "../../../Layout/Footer";
import { Helmet } from "react-helmet";
import LogoBrowser from "../../../assets/img/logoNavbar.png"

function HomePage() {
  return (
    <>
      <Helmet>
      <link rel="icon" href={LogoBrowser} type="image/png" />
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
