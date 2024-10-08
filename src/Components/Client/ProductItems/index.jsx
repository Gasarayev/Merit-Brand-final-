import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/ProductsApi";
import "../ProductItems/style.css";

function ProductItem() {
  const { data } = useGetProductsQuery();

  let uniqueCategories = [];
  
  if (data) {
    uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data?.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="our_items">
              <h1 className="vodka_title">Merit Brand Products</h1>
              <div className="items_category">
                <button
                  className={`category_btn ${
                    selectedCategory === "All" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </button>
                {uniqueCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`category_btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product_list">
              {filteredProducts?.map((item, i) => {
                return (
                  <div key={i} className="product_card">
                    <div className="product_img">
                      <img src={item.image} alt="merit-brand-product" />
                    </div>
                    <div className="product_info">
                      <p className="product_company">{item?.category}</p>
                      <Link
                        to={`/product-details/${item.id}`}
                        className="product_name"
                      >
                        <h2>{item?.name}</h2>
                      </Link>
                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(ProductItem);
