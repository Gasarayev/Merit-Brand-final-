import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAddAboutMutation } from "../../../../../api/AboutApi";
import { IoIosCloseCircle } from "react-icons/io";


function AboutForm() {
  const [aboutData] = useAddAboutMutation();
  console.log(aboutData);

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

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

  const addAbout = async (e) => {
    e.preventDefault();

    const randomId = Math.floor(Math.random() * 100);

    const addAboutData = {
      id: randomId,
      image,
      description,
    };

    try {
      if (addAboutData.image && addAboutData.description) {
        const response = await aboutData(addAboutData).unwrap();
        console.log("response from about data", response);
        showCustomAler();
      } else {
        console.log("respons error from about data");
        showCustomAlertEmptyInp();
      }

      setImage(null);
      setDescription("")
    } catch (err) {
      console.log("about data error", err);
      alert("error")
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

      <div id="customAlertFormEmptyInp" className="modal">
        <div className="modal-content bg-danger">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Empty Input</p>
        </div>
      </div>

      <Form onSubmit={addAbout}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>About Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>About content</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text-area"
            placeholder="About content"
          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default AboutForm;
