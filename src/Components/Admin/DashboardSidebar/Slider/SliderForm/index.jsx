import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAddSliderMutation } from "../../../../../api/SliderApi";
import { IoIosCloseCircle } from "react-icons/io";

function SliderForm() {

  const [addSliderData] = useAddSliderMutation();
  const [image, setImage] = useState("");

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


  const addSliderImg = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("sliderImage", image);
  
    try {
      if (image) {
        const response = await addSliderData(formData).unwrap(); 
        console.log("Response from add slider Img", response);
        showCustomAler();
      } else {
        showCustomAlertEmptyInp();
      }
  
      setImage("");
    } catch (err) {
      console.error("Error: ", err);
      alert("Upload failed: " + err.message);
    }
  };



  return (
    <>
    <div id="customAlertForm" className="modal">
        <div className="modal-content">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Data added successfully</p>
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
      <Form onSubmit={addSliderImg}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Slider Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}

          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default SliderForm;
