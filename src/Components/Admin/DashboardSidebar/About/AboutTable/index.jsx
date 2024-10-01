import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import {
  useDeleteAboutMutation,
  useEditAboutMutation,
  useGetAboutQuery,
} from "../../../../../api/AboutApi";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AboutTable() {
  const { data: aboutData } = useGetAboutQuery();
  const [removeData] = useDeleteAboutMutation();
  const [editAbout] = useEditAboutMutation();

  const [show, setShow] = useState(false);
  const [selectAbout, setSelectAbout] = useState(null);
  const [newAboutName, setNewAboutName] = useState("");
  const [newAboutImage, setNewAboutImage] = useState("");
  const [newAboutContent, setNewAboutContent] = useState("");

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

  const deleteAbout = async (aboutId) => {
    try {
      const response = await removeData(aboutId).unwrap();
      deleteshowCustomAlert();
      console.log(response, "delete about done");
    } catch (err) {
      alert(err, "delete about error");
      console.log(err, "delete about error");
    }
  };

  const handleClose = () => {
    setShow(false);
    setNewAboutContent("");
    setNewAboutImage("");
    setNewAboutName("")
  };

  const handleShow = (about) => {
    setSelectAbout(about);
    setNewAboutName(about.name);
    setNewAboutImage(about.image);
    setNewAboutContent(about.description);

    console.log("select about in handleShow", about);
    setShow(true);
    console.log(setNewAboutImage(about.image));
  };

  const handleSaveChanges = async () => {
    if (!selectAbout || !selectAbout.id) {
      alert("about id is invalid, not selected");
      return;
    }

    try {
      await editAbout({
        id: selectAbout.id,
        name: newAboutName,
        description: newAboutContent,
        image: newAboutImage,
      }).unwrap();
      console.log("about update success");
      handleClose();
    } catch (err) {
      console.log("err! about could not be updated");
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
          <Modal.Title>Edit About Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

          <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>About Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="About description"
                value={newAboutName}
                onChange={(e) => setNewAboutName(e.target.value)}
              />
            </Form.Group>
            

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>About Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => newAboutImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>About Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="About description"
                value={newAboutContent}
                onChange={(e) => setNewAboutContent(e.target.value)}
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
            <th>About Name</th>
            <th>About Image</th>
            <th>About Content</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {aboutData?.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>
                  {items?.image !== "No img" ? (
                    <img
                      src={`${items.image}`}
                      alt={items?.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    "No img"
                  )}
                </td>
                <td>{items.description}</td>
                <td className="align-middle text-center">
                  <div className="btn_product_ctgry">
                    <button  onClick={() => handleShow(items)} className="btn_product btn_product_edit">
                      <FaRegEdit />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn_product_ctgry">
                    <button onClick={() => deleteAbout(items.id)} className="btn_product btn_product_remove">
                      <IoTrashOutline  />
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

export default AboutTable;
