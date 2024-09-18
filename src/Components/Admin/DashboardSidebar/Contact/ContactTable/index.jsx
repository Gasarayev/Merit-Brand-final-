import React from 'react'
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

function ContactTable({contact}) {
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Addres</th>
            <th>Number</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>
                {items.addres}
                </td>
                <td>{items.number}</td>
                <td>{items.email}</td>
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

export default ContactTable
