import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useEditCategoryMutation,
} from "../../../../../api/CategoryApi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./style.css";


function CategoryTable() {
  
  const { data } = useGetCategoryQuery();
  const [removeCategory] = useDeleteCategoryMutation();
  const [editCategory] = useEditCategoryMutation();
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");

  const deleteCategory = async (categoryId) => {
    try {
      await removeCategory(categoryId).unwrap();
      alert("Data deleted successfully");
      console.log("delete category id", categoryId);
    } catch (err) {
      alert("Error! Category could not be deleted.");
    }
  };

  const handleClose = () => {
    setShow(false);
    setNewCategoryName("");
  };

  const handleShow = (category) => {
    setSelectedCategory(category);
    setNewCategoryName(category.category);
    console.log("Selected Category in handleShow:", category); 
    setShow(true);
};

const handleSaveChanges = async () => {
  console.log("Saving changes for ID:", selectedCategory?.id);
  if (!selectedCategory) {
      alert("No category selected.");
      return;
  }

  try {
      await editCategory({
          id: selectedCategory.id,
          category: newCategoryName,
      }).unwrap();
      console.log("Category updated successfully");
      handleClose();
  } catch (err) {
      console.log("Error! Category could not be updated.");
  }
};

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop={false} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
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
            <th>Category</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ctgry, indx) => (
            <tr key={indx}>
              <td>{ctgry.id}</td>
              <td>{ctgry.category}</td>
              <td className="align-middle text-center">
                <div className="btn_product_ctgry">
                  <button onClick={() => handleShow(ctgry)} className="btn_product btn_product_edit">
                    <FaRegEdit />
                  </button>
                </div>
              </td>
              <td>
                <div className="btn_product_ctgry">
                  <button onClick={() => deleteCategory(ctgry.id)}  className="btn_product btn_product_remove">
                    <IoTrashOutline />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CategoryTable;
