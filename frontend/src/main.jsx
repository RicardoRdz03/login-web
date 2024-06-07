import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import Principal from "./components/Principal.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/main",
        element: <Principal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
