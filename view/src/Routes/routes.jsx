
import Root from "../Components/Root"
import Basket from "../Pages/Basket"
import Details from "../Pages/Details"
import Favorites from "../Pages/Favorites"
import Home from "../Pages/Home"


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
            }
        ]
    }
]

export  default ROUTES