import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";
// import all the component as a page to main.jsx
import Error from "./Error";
import Login from "./Login";
import Signup from "./Signup";

// import ReactRouter to create a sub page
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// create a router with createBrowserRouter follow by class of sub page with component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  ,
  {
    path: "error",
    element: <Error />,
  },
]);

// this is essential at the end of main.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
