import React from 'react'
import NavbarMenu from '../../../Layout/Navbar'
import ProductPageHeader from '../../../Components/Client/ProductPageHeader'
import ProductItem from '../../../Components/Client/ProductItems'
import Footer from '../../../Layout/Footer'
import { Helmet } from 'react-helmet';


function ProductPage() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="http://localhost:5173/product" />
        <meta
          name="description"
          content="Merit Brand MMC, keyfiyyətli içkilər təqdim edir:Wine, Rum, və Congac. Şabran, Azərbaycanda müasir istehsalat müəssisəmizlə yüksək standartlara uyğun məhsullar."
        />
        <meta name="robots" content="index, follow" />
        <title>Merit Brand Product Page (Gasarayev Emil)</title>
      </Helmet>
      <NavbarMenu/>
      <ProductPageHeader/>
      <ProductItem/>
      <Footer/>
    </>
  )
}

export default ProductPage
