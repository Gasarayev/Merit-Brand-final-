import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { IoTrashOutline } from "react-icons/io5";
import {
  useDeleteSliderMutation,
  useGetSliderQuery,
} from "../../../../../api/SliderApi";
import { IoIosCloseCircle } from "react-icons/io";

function SliderTable() {
  const { data } = useGetSliderQuery();
  const [removeSliderImg] = useDeleteSliderMutation();

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

  const deleteImg = async (filename) => {
    try {
      const response = await removeSliderImg(filename).unwrap();
      deleteshowCustomAlert();
      console.log("delete image", filename);
    } catch (err) {
      console("error! image silinmedi");
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
            <th>Image</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, index) => (
            <tr key={index}>
              <td>{items.id}</td>
              <td className="pt-5 pb-5">
                {items.img !== "No img" ? (
                  <img
                    src={`http://localhost:3009/uploads/${items.filename}`}
                    alt="about section pics"
                    style={{ width: "600px", height: "400px" }}
                  />
                ) : (
                  "No img"
                )}
              </td>
              <td>
                <div className="btn_product_ctgry">
                  <button
                    className="btn_product btn_product_remove"
                    onClick={() => deleteImg(items.filename)}
                  >
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

export default SliderTable;
