/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../pages/home/home/Banner/Banner";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/home/Home/Home";
import Blogs from "../pages/blogs/Blogs";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bd-chef-quisine-server.vercel.app/chefs/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
