import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import AuthProvider from "./contexts/AuthProvider";
import LoaderProvider from "./contexts/LoaderProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);
