
import Root from "../Components/Root"
import Addproduct from "../Pages/AddPage"
import Basket from "../Pages/Basket"
import Details from "../Pages/Details"
import Favorites from "../Pages/Favorites"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"


const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/details/:id",
                element: <Details />
            },
            {
                path: '/addpage',
                element: <Addproduct />
            }
            ,
            {
                path: '/*',
                element: <NotFound />
            }
        ]
    }
]

export default ROUTES