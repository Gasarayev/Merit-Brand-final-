import React from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import "../style.css";

function CategoryTable({ category }) {
  return (
    <>
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
          {category.map((ctgry, indx) => (
            <tr key={indx}>
              {console.log(ctgry)}
              <td>{ctgry.id}</td>
              <td>{ctgry.name}</td>
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
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CategoryTable;
