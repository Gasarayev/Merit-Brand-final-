import React from "react";
import "../ProductDeatilsInfo/style.css";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/ProductsApi";
import ProductImg from "../../../assets/img/productImg.png";
import ProductDetailsComment from "../ProductDetailsComment";

function ProductDetailsInfo() {
  const { id } = useParams();
  const { data } = useGetProductsQuery();

  const product = data?.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className="product-details">
          {product ? (
            <>
              <div className="row m-0 p-0">
                <div className="col-md-6 m-0">
                  <div className="product-details_image">
                    <img src={ProductImg} alt={product.name} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-details_info">
                    <h2 className="vodka_title">{product.name}</h2>
                    <p className="vodka_desc">{product.category}</p>
                    <p className="vodka_text">{product.text}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h2>Product not found</h2>
          )}
        </div>

        <ProductDetailsComment productId={product.id} />
      </div>
    </>
  );
}

export default ProductDetailsInfo;
