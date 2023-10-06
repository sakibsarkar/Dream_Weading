import "./index.css";
import Home from "./assets/Compo/Home/Home";
import HomePageContent from "./assets/Compo/HomePageContent/HomePageContent";
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
