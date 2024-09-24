import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAddProductsMutation } from "../../../../../api/ProductsApi";
import { IoIosCloseCircle } from "react-icons/io";

function ProductForm() {

  const [addData] = useAddProductsMutation();
  

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
 


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

  const addProduct = async (e) => {
    e.preventDefault();

    const addProductData = {
      name,
      image,
      text,
    };

    try {
      const response = await addData(addProductData).unwrap();
      console.log("Response from addData:", response);
      showCustomAler();

      setName("");
      setImage(null);
      setText("");
    } catch (err) {
      console.error("Error: ", err);
      alert("error");
    }
    
  };



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
      <Form onSubmit={addProduct}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add Product</Button>
      </Form>
    </>
  );
}

export default ProductForm;
