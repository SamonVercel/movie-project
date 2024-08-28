import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Component/Layout/Layout.jsx";
import Context from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Layout />
    </Context>
  </React.StrictMode>
);
