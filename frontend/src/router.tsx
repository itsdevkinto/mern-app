import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/pages/Home.tsx";
import {ErrorPage} from "./components/pages/ErrorPage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import RegisterPage from "./components/pages/RegisterPage.tsx";

export const router = createBrowserRouter(
  
  [{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
