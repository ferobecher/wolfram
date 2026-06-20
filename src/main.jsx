import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import { ContentProvider } from "./context/ContentContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <ContentProvider>
          <App />
        </ContentProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
