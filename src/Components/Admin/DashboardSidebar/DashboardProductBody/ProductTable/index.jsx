import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import {
  useDeleteProductsMutation,
  useEditProductsMutation,
  useGetProductsQuery,
} from "../../../../../api/ProductsApi";
import { IoIosCloseCircle } from "react-icons/io";
import "../ProductTable/style.css";
import { useGetCategoryQuery } from "../../../../../api/CategoryApi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ProductTable() {
  const { data } = useGetProductsQuery();
  const [removeData] = useDeleteProductsMutation();
  const [editProduct] = useEditProductsMutation();
  const { data: categoryData } = useGetCategoryQuery();

  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductText, setNewProductText] = useState("");
  const [newProductImage, setNewProductImage] = useState("");

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

  const deleteData = async (productId) => {
    try {
      const response = await removeData(productId).unwrap();
      deleteshowCustomAlert();
      console.log("delete");
    } catch (err) {
      console.log("silinmedi");
      alert("error! silinmedi");
    }
  };

  const handleClose = () => {
    setShow(false);
    newProductName("");
    newProductCategory("");
    newProductText("");
    newProductImage("");
  };

  const handleShow = (product) => {
    setSelectProduct(product);
    setNewProductName(product.name);
    setNewProductCategory(product.category);
    setNewProductText(product.text);
    setNewProductImage(product.image);
    console.log("Selected Product in handleShow:", product);
    setShow(true);
    console.log(setNewProductImage(product.image)  )
  };

  

  const handleSaveChanges = async () => {
    if (!selectProduct || !selectProduct.id) {
      alert("No product selected or product ID is invalid.");
      return;
    }

    try {
      await editProduct({
        id: selectProduct.id,
        name: newProductName,
        category: newProductCategory,
        text: newProductText,
        image: newProductImage,
      }).unwrap();
      console.log("Category updated successfully");
      handleClose();
    } catch (err) {
      console.log("Error! Category could not be updated.");
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
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setNewProductImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product description"
                value={newProductText}
                onChange={(e) => setNewProductText(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              onChange={(e) => setNewProductCategory(e.target.value)}
              value={newProductCategory}
              className="mb-3"
              aria-label="Default select example"
            >
              <option>Select category ...</option>
              <option>All</option>
              {categoryData?.map((item, index) => (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              ))}
            </Form.Select>
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
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((products, index) => {
            return (
              <tr key={index}>
                <td>{products?.id}</td>
                <td>{products?.name}</td>
                <td>
                  {products?.image !== "No img" ? (
                    <img
                      src={`${products.image}`}
                      alt={products?.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    "No img"
                  )}
                </td>
                <td>{products?.text}</td>
                <td>{products?.category}</td>
                <td className="align-middle text-center">
                  <div className="btn_product_ctgry">
                    <button
                      onClick={() => handleShow(products)}
                      className="btn_product btn_product_edit"
                    >
                      <FaRegEdit />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn_product_ctgry">
                    <button className="btn_product btn_product_remove">
                      <IoTrashOutline onClick={() => deleteData(products.id)} />
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

export default ProductTable;
