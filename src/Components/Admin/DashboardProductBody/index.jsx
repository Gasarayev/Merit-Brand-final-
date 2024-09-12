import React from "react";
import "../DashboardProductBody/style.css";

function DashboardProductBody() {
  return (
    <>
      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0">
              <div className="product_table"><h1>TABLE Product</h1></div>
            </div>
            <div className="col-3 p-0">
              <div className="product_table"><h1>FORM Product</h1></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardProductBody;
