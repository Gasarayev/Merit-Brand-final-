import React from "react";
import DashboardSidebar from "../../../Components/Admin/DashboardSidebar";
import DashboardProductBody from "../../../Components/Admin/DashboardSidebar/DashboardProductBody";
import { Route, Routes } from "react-router-dom";
import DashboardCategory from "../../../Components/Admin/DashboardSidebar/DashboardCategory";
import Logo from "../../../assets/img/logoNavbar.png";
import "../../../Components/Admin/DashboardSidebar/style.css";
import About from "../../../Components/Admin/DashboardSidebar/About";

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row dashboardSidebar" >
          <div className="admin_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="col-2 p-0">
            <DashboardSidebar />
          </div>
          <div className="col-10 p-0 dashboard_body_content">
            <Routes>
              <Route path="product" element={<DashboardProductBody />} />
              <Route path="category" element={<DashboardCategory />} />
              <Route path="about" element={<About />} />

              
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
