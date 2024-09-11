import React from 'react'
import NavbarMenu from '../../Layout/Navbar'
import AboutSection from '../../Components/AboutSection'
import Footer from '../../Layout/Footer'
import Contact from '../../Components/Contact'
import AboutPageHeader from '../../Components/AboutPageHeader'

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
