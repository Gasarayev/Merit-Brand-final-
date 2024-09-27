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
  const [deleteData] = useDeleteSliderMutation();
  const [showModal, setShowModal] = useState(false); // Modal durumu için state
  const [deletedSliderId, setDeletedSliderId] = useState(null); // Silinecek slider ID'si

  const handleDeleteClick = (sliderId) => {
    setDeletedSliderId(sliderId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (deletedSliderId) {
      try {
        const response = await deleteData(deletedSliderId).unwrap();
        console.log("Deleted slider image:", response);
        setShowModal(false); // Modalı kapat
      } catch (err) {
        console.error("Error deleting slider image:", err);
        alert("Error! Slider image not deleted");
      }
    }
  };

  return (
    <>
      {showModal && (
        <div id="customAlertdelete" className="modal">
          <div className="modal-content modal-content-delete">
            <span className="close" onClick={() => setShowModal(false)}>
              <IoIosCloseCircle />
            </span>
            <p>Data deleted successfully</p>
            <button onClick={confirmDelete}>Confirm Delete</button>
          </div>
        </div>
      )}
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
                  src={`http://localhost:3009/uploads/${items.filename}`}                    alt="about section pics"
                    style={{ width: "600px", height: "400px" }}
                  />
                ) : (
                  "No img"
                )}
              </td>
              <td>
                <div className="btn_product_ctgry">
                  <button className="btn_product btn_product_remove" onClick={() => handleDeleteClick(items.id)}>
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
