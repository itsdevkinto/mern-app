import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/pages/HomePage.tsx";
import { ErrorPage } from "../components/pages/ErrorPage.tsx";
import LoginPage from "../components/pages/LoginPage.tsx";
import RegisterPage from "../components/pages/RegisterPage.tsx";
import { GuestRoute } from "../routes/GuestRoute.tsx";

export const router = createBrowserRouter([
  {
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
        element: (
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRoute>
            <RegisterPage />
          </GuestRoute>
        ),
      },
    ],
  },
]);
