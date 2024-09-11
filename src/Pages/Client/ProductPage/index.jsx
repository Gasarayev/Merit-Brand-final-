import React from 'react'
import NavbarMenu from '../../../Layout/Navbar'
import ProductPageHeader from '../../../Components/Client/ProductPageHeader'
import ProductItem from '../../../Components/Client/ProductItems'
import Footer from '../../../Layout/Footer'


function ProductPage() {
  return (
    <>
      <NavbarMenu/>
      <ProductPageHeader/>
      <ProductItem/>
      <Footer/>
    </>
  )
}

export default ProductPage
