import React, { useState } from "react";
import "../DashboardCategory/style.css";
import "../DashboardProductBody/style.css";
import { IoIosCloseCircle } from "react-icons/io";
import CategoryTable from "./CategoryTable";
import CategoryForm from "./CategoryForm";

function DashboardCategory() {
  const ourCategory = {
    id: 1,
    name: "Vodka",
  };

  const [category, setCategory] = useState([ourCategory]);
  const [categoryName, setCategoryName] = useState("");

  const addCategory = (e) => {
    e.preventDefault();

    const newCategory = {
      id: category.length + 1,
      name: categoryName,
    };

    if (newCategory.name) {
      setCategory([...category, newCategory]);
    } else {
      showCustomAlert();
    }

    setCategoryName("");
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
                {" "}
                <CategoryTable category={category} />{" "}
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <CategoryForm
                  categoryName={categoryName}
                  setCategoryName={setCategoryName}
                  addCategory={addCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardCategory;
