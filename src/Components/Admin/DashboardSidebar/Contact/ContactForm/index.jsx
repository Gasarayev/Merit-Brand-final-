import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAddContactMutation } from "../../../../../api/ContactApi";
import { IoIosCloseCircle } from "react-icons/io";

function ContactForm() {
  const [contactData] = useAddContactMutation();
  console.log(contactData);

  const [addres, setAddres] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

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

  const addContact = async (e) => {
    e.preventDefault();

    const randomId = Math.floor(Math.random() * 100);

    const addContactData = {
      id: randomId,
      addres,
      number,
      email,
    };

    try {
      if (
        addContactData.addres &&
        addContactData.number &&
        addContactData.email
      ) {
        const response = contactData(addContactData).unwrap();
        console.log("response from contactData", response);
        showCustomAler();
      } else {
        showCustomAlertEmptyInp();
      }

      setAddres("");
      setEmail("");
      setNumber("");
    } catch (err) {
      console.log("Error addContact", err);
      alert("error add contact");
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
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
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Addres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Addres"
            value={addres}
            onChange={(e) => setAddres(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Number"
            value={number}
            onChange={handleNumberChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="About content"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default ContactForm;
