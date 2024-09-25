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

function ProductTable() {
  const { data } = useGetProductsQuery();

  const [removeData] = useDeleteProductsMutation();

  // const [editData] = useEditProductsMutation();

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
                      src={products?.image}
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
                    <button className="btn_product btn_product_edit">
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