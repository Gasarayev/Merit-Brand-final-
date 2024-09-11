import React from "react";
import "../ProductDeatilsInfo/style.css";
import { useParams } from "react-router-dom";

function ProductDetailsInfo() {
  const { id } = useParams();
  
  return (
    <>
      <h1>Product Details for Product ID: {id}</h1>
    </>
  );
}

export default ProductDetailsInfo;
