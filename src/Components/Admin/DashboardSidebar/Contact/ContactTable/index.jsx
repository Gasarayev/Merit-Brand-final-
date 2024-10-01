import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import {
  useDeleteContactMutation,
  useEditContactMutation,
  useGetContactQuery,
} from "../../../../../api/ContactApi";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ContactTable() {
  const { data } = useGetContactQuery();

  const [removeData] = useDeleteContactMutation();
  const [editData] = useEditContactMutation();
  const [show, setShow] = useState(false);

  const [selectContact, setSelectContact] = useState(null);
  const [newAddres, setNewAddress] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const deleteshowCustomAlert = () => {
    const modal = document.getElementById("customAlertdelete");
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

  const deleteContact = async (contactId) => {
    try {
      const response = removeData(contactId).unwrap();
      deleteshowCustomAlert();
      console.log("delete contact info");
    } catch (err) {
      console.log(err, "contact silinme xeta bas verdi");
      alert("error! can't deleted");
    }
  };

  const handleClose = () => {
    setShow(false);
    setNewAddress("");
    setNewNumber("");
    setNewEmail("");
  };

  const handleShow = (contact) => {
    setSelectContact(contact);
    setNewAddress(contact.addres);
    setNewNumber(contact.number);
    setNewEmail(contact.email);
    console.log("Selected Contact in handleShow:", contact);
    setShow(true);
  };

  const handleSaveChanges = async () => {
    if (!selectContact || !selectContact.id) {
      alert("No product selected or product ID is invalid.");
      return;
    }

    try {
      await editData({
        id: selectContact.id,
        addres: newAddres,
        number: newNumber,
        email: newEmail,
      }).unwrap();
      console.log("Contact updated successfully");
      handleClose();
    } catch (err) {
      console.log("Error! Contact could not be updated.");
    }
  };

  return (
    <>
      <div id="customAlertdelete" className="modal">
        <div className="modal-content modal-content-delete">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Data deleted successfully</p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop={false} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address..."
                value={newAddres}
                onChange={(e) => setNewAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number..."
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email..."
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Addres</th>
            <th>Number</th>
            <th>E-mail</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.addres}</td>
                <td>{items.number}</td>
                <td>{items.email}</td>
                <td className="align-middle text-center">
                  <div className="btn_product_ctgry">
                    <button
                      onClick={() => handleShow(items)}
                      className="btn_product btn_product_edit"
                    >
                      <FaRegEdit />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn_product_ctgry">
                    <button className="btn_product btn_product_remove">
                      <IoTrashOutline onClick={() => deleteContact(items.id)} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ContactTable;
