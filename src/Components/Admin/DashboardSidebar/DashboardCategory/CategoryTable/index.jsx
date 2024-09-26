import React from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import "../style.css";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../../../api/CategoryApi";
import { IoIosCloseCircle } from "react-icons/io";

function CategoryTable() {
  const { data } = useGetCategoryQuery();
  // console.log(data);

  const [removeCategory] = useDeleteCategoryMutation();

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

  const deleteCategory = async (categoryId) => {
    try {
      const response = await removeCategory(categoryId).unwrap();
      deleteshowCustomAlert();
      // console.log("delete category");

      console.log("delete category id" ,categoryId)
    } catch (err) {
      // console.log(err, "category silinmede xeta bash verdi");
      alert("error! category silinmedi");
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
                  <button className="btn_product btn_product_edit">
                    <FaRegEdit />
                  </button>
                </div>
              </td>
              <td>
                <div className="btn_product_ctgry">
                  <button className="btn_product btn_product_remove">
                    <IoTrashOutline onClick={() => deleteCategory(ctgry.id)} />
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
