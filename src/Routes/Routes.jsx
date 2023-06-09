  
import {
        createBrowserRouter,
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Sceret from "../Pages/Cecret/Sceret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/Dashboar/Mycart/Mycart";
 


    export const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
                {
                        path:'/',
                        element:<Home></Home>
                },
                {
                  path:'menu',
                  element:<Menu></Menu>
                },
                {
                  path:'order/:category',
                  element:<Order></Order>
                },
                {
                  path:'login',
                  element:<Login></Login>
                },
                {
                  path:'signup',
                  element: <SignUp></SignUp>
                },
                {
                  path:'secret',
                  element:<PrivateRoute><Sceret></Sceret></PrivateRoute>
                }
          ]
          
        },

        {
          path:'dashboard',
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'mycart',
              element:<Mycart></Mycart>
            }
          ]
        }
      ]);