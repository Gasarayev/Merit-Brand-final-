import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <>
    <script type="application/ld+json">
      {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Merit Brand Home Page",
              "url": "http://localhost:5173/",
              "datePublished": "2024-09-01",
              "dateModified": "2024-09-11"
            }
          `}
    </script>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
