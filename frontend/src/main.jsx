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
import { useState } from "react";

const App = () => {
  const [loggedUser, setLoggedUser] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setLoggedUser={setLoggedUser} />,
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
          element: <Principal loggedUser={loggedUser} />,
        },
      ],
    },
  ]);

  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
