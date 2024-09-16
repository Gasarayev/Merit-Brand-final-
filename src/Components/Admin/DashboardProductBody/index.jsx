import React, { useState, useId } from "react";
import "../DashboardProductBody/style.css";
import { IoIosCloseCircle } from "react-icons/io";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";


function DashboardProductBody() {


  const ourProduct = {
    id: 1,
    name: "MirvariProduct",
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Svln_svln4821_ordubad_me_best_top_photography_resimleri_sekilleri_photos_creative_profil_maraqli_sekil_resim_fotograflari_fotograf_ornek_resimler_%28344%29.JPG',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  };

  console.log(ourProduct.image)
  const [product, setProduct] = useState([ourProduct]);
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [productDesc, setProductDesc] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: product.length + 1,
      name: productName,
      image: productImg ? URL.createObjectURL(productImg) : "No img",
      desc: productDesc,
    };

    if (newProduct.name && newProduct.image && newProduct.desc) {
      setProduct([...product, newProduct]);
    } else {
      showCustomAlert();
    }

    setProductName("");
    setProductImg(null);
    setProductDesc("");
  };
  

  function showCustomAlert() {
    const modal = document.getElementById("customAlert");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }





  return (
    <>
    <div id="customAlert" className="modal">
        <div className="modal-content">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Please fill all the boxes</p>
        </div>
      </div>

      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0 d-flex justify-content-center">
              <div className="product_table">
                <ProductTable product={product}/>
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <ProductForm
                productName={productName}
                setProductName={setProductName}
                productImg={productImg}
                setProductImg={setProductImg}
                productDesc={productDesc}
                setProductDesc={setProductDesc}
                addProduct={addProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default DashboardProductBody;
