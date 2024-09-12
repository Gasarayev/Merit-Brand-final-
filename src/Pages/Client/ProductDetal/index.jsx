import { useParams } from "react-router-dom";
import ProductDetailsInfo from "../../../Components/Client/ProductDeatilsInfo";
import Footer from "../../../Layout/Client/Footer";
import NavbarMenu from "../../../Layout/Client/Navbar";
import { Helmet } from "react-helmet";

function ProductDetails() {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`http://localhost:5173/product-details/${id}`}
        />
        <meta
          name="description"
          content="Merit Brand LLC, founded in 2007 in Shabran, Azerbaijan, utilizes modern equipment and favorable conditions to produce high-quality goods."
        />
        <meta name="robots" content="index, follow" />
        <title>Merit Brand Product Details Page (Gasarayev Emil)</title>
      </Helmet>
      <NavbarMenu />

      <ProductDetailsInfo />

      <Footer />
    </>
  );
}

export default ProductDetails;
