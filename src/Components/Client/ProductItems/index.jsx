import React from "react";
import ProductImg from "../../../assets/img/productImg.png";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/ProductsApi";
import "../ProductItems/style.css";

function ProductItem() {
  const { data } = useGetProductsQuery();
  console.log(data);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="our_items">
              <h1 className="vodka_title">Merit Brand Products</h1>
              <div className="items_category">
                <button className="category_btn">All</button>
                <button className="category_btn">Vodka</button>
                <button className="category_btn">Wine</button>
                <button className="category_btn">Rum</button>
                <button className="category_btn">Congac</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="product_list">
              {data?.map((item, i) => {

              return(  <div key={i} className="product_card">
                  <div className="product_img">

                    <img src={ProductImg} alt="merit-brand-product" />

                  </div>
                  <div className="product_info">
                    <p className="product_company">{item?.brand}</p>
                    <Link  className="product_name">
                      <h2> {item?.name} </h2>
                    </Link>
                    <h3 className="product_sort">{item?.name1}</h3>
                  </div>

                </div>
              )
              })}
         
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductItem;
