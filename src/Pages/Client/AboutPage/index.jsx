import React from 'react'
import NavbarMenu from '../../../Layout/Navbar'
import AboutPageHeader from '../../../Components/Client/AboutPageHeader'
import AboutSection from '../../../Components/Client/AboutSection'
import Contact from '../../../Components/Client/Contact'
import Footer from '../../../Layout/Footer'


function AboutPage() {
  return (
    <>
      <NavbarMenu/>
      <AboutPageHeader/>
      <AboutSection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default AboutPage
