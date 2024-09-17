import React from "react";
import "../DashboardSidebar/style.css";
import { Link } from "react-router-dom";

function DashboradSidebar() {
  return (
    <>
      <section className="dashboardSidebar">
    
            <div>
              <div className="sidebar_topic">
                <div className="sidebar_product">
                  <Link to="/admin/dashboard/product">
                    <p>Product</p>
                  </Link>
                </div>
                <div className="sidebar_category">
                  <Link to="/admin/dashboard/category">
                    <p>Category</p>
                  </Link>
                </div>
                <div className="sidebar_category">
                  <Link to="/admin/dashboard/about">
                    <p>About</p>
                  </Link>
                </div>
                <div className="sidebar_category">
                  <Link to="/admin/dashboard/#">
                    <p>Contact</p>
                  </Link>
                </div>
                <div className="sidebar_category">
                  <Link to="/admin/dashboard/#">
                    <p>Slider</p>
                  </Link>
                </div>
              </div>
            </div>
       
      </section>
    </>
  );
}

export default DashboradSidebar;
