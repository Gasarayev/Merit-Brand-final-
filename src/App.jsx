import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './i18n';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/Client/ProductDetal/index.jsx";
import ProductPage from "./Pages/Client/ProductPage/index.jsx";
import AboutPage from "./Pages/Client/AboutPage/index.jsx";
import HomePage from "./Pages/Client/HomePage/index.jsx";
import LoginPage from "./Pages/Admin/LoginPage/index.jsx";
import Dashboard from "./Pages/Admin/Dashboard/index.jsx";
import PrivateRouter from "./router/PrivateRouter/index.jsx";
import { ContactPage } from "./Pages/Client/ContactPage/index.jsx";


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-merit-brand" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/contact-us" element={<ContactPage />} />

          <Route
            path="/admin/dashboard/*"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />

          <Route path="/admin/login" element={<LoginPage />} />
        </Routes>
      </Router>
    
  );
}

export default App;
