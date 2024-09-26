import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAddCategoryMutation } from "../../../../../api/CategoryApi";
import { IoIosCloseCircle } from "react-icons/io";

function CategoryForm() {

  const [addCategoryData] = useAddCategoryMutation();

  const [category, setCategory]= useState("");

  const showCustomAler = () => {
    const modal = document.getElementById("customAlertForm");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  const showCustomAlertEmptyInp = () => {
    const modal = document.getElementById("customAlertFormEmptyInp");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };


  
  const addCategory = async (e) =>{
    e.preventDefault();

    const randomId = Math.floor(Math.random() * 100);
    const addData = {
      id: randomId,
      category,
    };

    try{
      if( addData.category){
          const response = await addCategoryData(addData).unwrap();
          console.log("response from addCategory", response);
          showCustomAler();
      }else{
        showCustomAlertEmptyInp();

      }

      setCategory("");
    }catch(err){
      console.log(err, "add category xeta bash verdi")
      alert("add category xeta bash verdi")
    }
  }

  return (
    <>

<div id="customAlertForm" className="modal">
        <div className="modal-content">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Data add successfully</p>
        </div>
      </div>

      <div id="customAlertFormEmptyInp" className="modal">
        <div className="modal-content bg-danger">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Empty Input</p>
        </div>
      </div>
      <Form onSubmit={addCategory}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form>
    </>
  );
}

export default CategoryForm;
