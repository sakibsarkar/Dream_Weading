import "./index.css";
import Home from "./Compo/Home/Home";
import HomePageContent from "./Compo/HomePageContent/HomePageContent";
import Login from "./Compo/Login/Login";
import Packages from "./Compo/Packages/Packages";
import PrivateRoute from "./Compo/PrivateRoute/PrivateRoute";
import Products from "./Compo/Products/Products";
import React from "react";
import ReactDOM from "react-dom/client";
import ServiceDetails from "./Compo/ServiceDetails/ServiceDetails";
import Services from "./Compo/Services/Services";
import SignUp from "./Compo/SignUp/SignUp";
import UserAuth from "./Compo/UserAuth/UserAuth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([{
  path: "/",
  element: <Home></Home>,
  children: [
    {
      path: "/",
      element: <HomePageContent></HomePageContent>
    },
    {
      path: "/login",
      element:<Login></Login>
    }
    ,
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/shop",
      element: <Products></Products>
    },
    {
      path: "/packages",
      element: <Packages></Packages>
    },
    {
      path: "/serviceDetail/:id",
      loader: () => fetch("https://sakibsarkar.github.io/assignment-9-product_API/service.json"),
      element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
    }


  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={routes}></RouterProvider>
    </UserAuth>
  </React.StrictMode>,
)
