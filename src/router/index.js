import Deneme from "../pages/Deneme"
import Home from "../pages/Home.page"

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
]

export default routes