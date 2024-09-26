import React from "react";
import SliderTable from "./SliderTable";
import SliderForm from "./SliderForm";

function DashboardSlider() {
  return (
    <>
      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0 d-flex justify-content-center">
              <div className="product_table">
                <SliderTable />
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <SliderForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardSlider;
