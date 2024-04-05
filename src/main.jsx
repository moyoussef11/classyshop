import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./RTK/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
