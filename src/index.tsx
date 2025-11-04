// src/index.js (or main.tsx / index.tsx)

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Or your AdminDashboard component
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

// REMOVE this line: import { firebaseConfig } from "./firebaseConfig";
// REMOVE other firebase imports here too. They belong in the components that use them.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 3. Wrap your ENTIRE app */}

    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
