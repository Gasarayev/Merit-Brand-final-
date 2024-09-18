import React from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

function SliderTable({slider}) {
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {slider.map((items, index) => {
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
                      <IoTrashOutline />
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
