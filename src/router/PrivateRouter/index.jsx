import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
  const adminPassword = "123"; 
  const inputPassword = localStorage.getItem("adminPassword");

  if (inputPassword !== adminPassword) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouter;
