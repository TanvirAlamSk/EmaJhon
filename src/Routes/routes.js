import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import Products from "../components/Products/Products";

export const route = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            { path: "/", element: <Products></Products> },
            { path: "/review-order", element: <ReviewOrder></ReviewOrder> }
        ]
    },
    {}
])