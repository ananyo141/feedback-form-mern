import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import ViewFeedbacks from "./pages/ViewFeedbacks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/showfeedbacks",
    element: <ViewFeedbacks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
