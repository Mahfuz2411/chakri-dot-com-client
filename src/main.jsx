import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import AuthProvider from "./contexts/AuthProvider";
import LoaderProvider from "./contexts/LoaderProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LoaderProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LoaderProvider>
    </HelmetProvider>
  </React.StrictMode>
);
