import React from 'react'
import NavbarMenu from '../../Layout/Navbar'
import Footer from '../../Layout/Footer'
import ProductPageHeader from '../../Components/ProductPageHeader'
import ProductItem from '../../Components/ProductItems'

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
