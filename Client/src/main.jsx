import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Authentication/Login.jsx";
import Signup from "./pages/Authentication/Signup.jsx";
import Home from "./pages/Home/Home.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store} />
    <App />
    <RouterProvider router={router} />
  </>
);
