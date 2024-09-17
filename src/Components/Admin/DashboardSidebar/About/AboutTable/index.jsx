import React from 'react'
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

function AboutTable({about = []}) {
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>About Image</th>
            <th>About Content</th>
          </tr>
        </thead>
        <tbody>
          {about.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>
                  {items.img !== "No img" ? (
                    <img
                      src={items.img}
                      alt="about section pics"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    "No img"
                  )}
                </td>
                <td>{items.content}</td>
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
  )
}

export default AboutTable
