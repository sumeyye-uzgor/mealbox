import Deneme from "../pages/Deneme"
import Home from "../pages/Home.page"
import { Redirect } from "react-router"
import NotFound from "../pages/NotFound.page"

const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home,
    }, {
        id: 2,
        path: "/deneme",
        exact: true,
        component: Deneme
    }
    , {
        id: 2,
        path: "*",
        exact: false,
        component: NotFound
    }
]

export default routes