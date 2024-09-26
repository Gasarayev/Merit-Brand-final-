import React from "react";
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

  const removeData = async (sliderId) => {
    try {
      const response = await deleteData(sliderId).unwrap();
      deleteshowCustomAlert();
      console.log("delete slider img");

      console(response, "delete slider");
    } catch (err) {
      console.log(err, "slider img silinmede xeta bash verdi");
      alert("error! slider img silinmedi");
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
          {data?.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td className="pt-5 pb-5">
                  {items.img !== "No img" ? (
                    <img
                      src={items.img}
                      alt="about section pics"
                      style={{ width: "600px", height: "400px" }}
                    />
                  ) : (
                    "No img"
                  )}
                </td>

                <td>
                  <div className="btn_product_ctgry">
                    <button className="btn_product btn_product_remove">
                      <IoTrashOutline onClick={() => removeData(items.id)} />
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

export default SliderTable;
