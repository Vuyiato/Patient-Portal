import React from "react";
import ReactDOM from "react-dom/client";
// FIX: Added the .tsx extension to the import
import App from "./patientPortal";
// This imports the Tailwind styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
