import Deneme from "../pages/Deneme"
import Home from "../pages/Home.page"
import { Redirect } from "react-router"
import NotFound from "../pages/NotFound.page"
import ChooseMenu from "../pages/ChooseMenu"

const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home,
    },
    {
        id: 2,
        path: "/deneme",
        exact: true,
        component: Deneme
    },
    {
        id: 3,
        path: "/menusecimi",
        exact: true,
        component: ChooseMenu
    },
    {
        id: 789,
        path: "*",
        exact: false,
        component: NotFound
    }
]

export default routes