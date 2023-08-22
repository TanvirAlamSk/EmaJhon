import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../components/Home/Home";
import Order from "../components/Order/Order";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/order",
                loader: () => fetch('products.json'),
                element: <Order></Order>,
            },
            {
                path: "/inventory", element: <Inventory></Inventory>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <SignUp></SignUp>
            }
        ]
    }
])

