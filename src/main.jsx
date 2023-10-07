import "./index.css";
import AuthenticationPotector from "./Compo/AuthenticationPotector/AuthenticationPotector";
import Home from "./Compo/Home/Home";
import HomePageContent from "./Compo/HomePageContent/HomePageContent";
import Login from "./Compo/Login/Login";
import PrivateRoute from "./Compo/PrivateRoute/PrivateRoute";
import Products from "./Compo/Products/Products";
import React from "react";
import ReactDOM from "react-dom/client";
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
      element: <Login></Login>
    }
    ,
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/shop",
      element: <PrivateRoute><Products></Products></PrivateRoute>
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
