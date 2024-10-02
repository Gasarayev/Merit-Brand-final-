import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRouter from "./router/PrivateRouter/index.jsx";
import {ContactPage} from "./Pages/Client/ContactPage/index.jsx"


const ProductDetails = lazy(() => import("./Pages/Client/ProductDetal/index.jsx"));
const ProductPage = lazy(() => import("./Pages/Client/ProductPage/index.jsx"));
const AboutPage = lazy(() => import("./Pages/Client/AboutPage/index.jsx"));
const HomePage = lazy(() => import("./Pages/Client/HomePage/index.jsx"));
const LoginPage = lazy(() => import("./Pages/Admin/LoginPage/index.jsx"));
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard/index.jsx"));

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  </Router>
  );
}

export default App;
