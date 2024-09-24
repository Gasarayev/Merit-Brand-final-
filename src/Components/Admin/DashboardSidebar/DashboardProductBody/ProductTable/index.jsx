import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { useGetProductsQuery } from "../../../../../api/ProductsApi";

function ProductTable() {

  const {data} = useGetProductsQuery();
  
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Description</th>
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

export default ProductTable;
