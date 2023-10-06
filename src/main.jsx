import "./index.css";
import Home from "./Compo/Home/Home";
import HomePageContent from "./Compo/HomePageContent/HomePageContent";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([{
  path: "/",
  element: <Home></Home>,
  children: [
    {
      path: "/",
      element: <HomePageContent></HomePageContent>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
