import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Oder from "../pages/Oder/Oder/Oder";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Test from "../Test";
import PrivateRoute from "./PrivateRoute";
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

]);
export default router