import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Oder from "../pages/Oder/Oder/Oder";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Test from "../Test";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashbord/MyCart/MyCart";
import AllUser from "../pages/Dashbord/AllUser/AllUser";
import AddItem from "../pages/Dashbord/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashbord/ManageItems/manageItems";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'menu',
                element:<Menu/>
            },
            {
                path:'oder/:category',
                element:<Oder/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signUp',
                element:<SignUp/>
            },
            {
                path:'test',
                element:<PrivateRoute><Test/></PrivateRoute>
            },
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'mycart',
                element:<MyCart/>
            },
            {
                path:'users',
                element:<AllUser/>
            },
            {
                path:'addItem',
                element:<AdminRoute><AddItem/></AdminRoute>
            },
            {
                path:'manageItems',
                element:<AdminRoute><ManageItems/></AdminRoute>
            },
        ]
    }

]);
export default router