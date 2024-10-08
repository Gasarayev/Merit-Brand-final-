import React, { useEffect, useState } from "react";
import "../ProductDeatilsInfo/style.css";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/ProductsApi";
import ProductDetailsComment from "../ProductDetailsComment";

function ProductDetailsInfo() {
  const { id } = useParams();
  const { data } = useGetProductsQuery();
  
  const product = data?.find((item) => item.id === parseInt(id));
  
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const { width, height } = target.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = clientX - (target.offsetLeft + centerX);
    const deltaY = clientY - (target.offsetTop + centerY);

    const rotateX = (deltaY / centerY) * 10; 
    const rotateY = (deltaX / centerX) * -10; 

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); 
  };

  return (
    <div className="container marginForNavbar">
      <div className="product-details">
        {product ? (
          <div className="row m-0 p-0">
            <div className="col-md-6 m-0">
              <div 
                className="product-details_image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                className="productDetailsImg"
                  src={product.image} 
                  alt={product.name} 
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 productDet_mobile">
              <div className="product-details_info">
                <h1 className="vodka_title">{product.name}</h1>
                <h2 className="vodka_desc">{product.category}</h2>
                <p className="vodka_text">{product.text}</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Product not found</h2>
        )}
      </div>

      {product && <ProductDetailsComment productId={product.id} />}
    </div>
  );
}

export default React.memo(ProductDetailsInfo);
