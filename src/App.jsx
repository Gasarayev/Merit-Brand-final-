import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import HomePage from "./Pages/HomePage/index.jsx";
import AboutPage from "./Pages/AboutPage/index.jsx";
import store from "./redux/store.js";
import ProductPage from "./Pages/ProductPage/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-merit-brand" element={<AboutPage />} />
          <Route path="/product-merit-brand" element={<ProductPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
