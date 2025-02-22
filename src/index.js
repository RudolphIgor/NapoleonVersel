import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { register } from "swiper/element/bundle";
register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>
);
