import React from "react";
import "../DashboardCategory/style.css";
import "../DashboardProductBody/style.css";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function DashboardCategory() {
  console.log("test");
  return (
    <>
      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0 d-flex justify-content-center">
              <div className="product_table">
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
                    <tr>
                      <td>1</td>
                      <td>Vodka</td>
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
                    <tr>
                      <td>1</td>
                      <td>Wine</td>

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
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="Category name" />
                  </Form.Group>
                  

                  <Button variant="primary" type="submit">
                    Add Category
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardCategory;
