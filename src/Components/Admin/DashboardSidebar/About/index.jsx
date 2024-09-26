import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import AboutTable from "./AboutTable";
import AboutForm from "./AboutForm";

function About() {
  return (
    <>
      <div id="customAlert" className="modal">
        <div className="modal-content">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Please fill all the boxes</p>
        </div>
      </div>

      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0 d-flex justify-content-center">
              <div className="product_table">
                <AboutTable />
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <AboutForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
