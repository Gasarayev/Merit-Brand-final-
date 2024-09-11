import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ProductDetails from "./Pages/Client/ProductDetal/index.jsx";
import ProductPage from "./Pages/Client/ProductPage/index.jsx";
import AboutPage from "./Pages/Client/AboutPage/index.jsx";
import HomePage from "./Pages/Client/HomePage/index.jsx";
import LoginPage from "./Pages/Admin/LoginPage/index.jsx";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-merit-brand" element={<AboutPage />} />
          <Route path="/product-merit-brand" element={<ProductPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />

          <Route path="/admin/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
