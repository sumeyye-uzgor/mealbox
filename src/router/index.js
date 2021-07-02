import Deneme from "../pages/Deneme"
import Home from "../pages/Home.page"
import NotFound from "../pages/NotFound.page"
import ChooseMenu from "../pages/ChooseMenu.page"
import DiscountMenus from "../pages/DiscountMenus.page"
import DiscountMenuItems from "../pages/DiscountMenuItems.page"
import Menu from "../pages/Menu.page"
import Contact from "../pages/Contact.page"


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
        id: 4,
        path: "/indirimlimenusecimi",
        exact: true,
        component: DiscountMenus
    },
    {
        id: 5,
        path: "/menu/:id",
        exact: true,
        component: Menu
    },
    {
        id: 5,
        path: "/indirimlimenu/yemeksecim",
        exact: true,
        component: DiscountMenuItems
    },
    {
        id: 12,
        path: "/iletisim",
        exact: true,
        component: Contact
    },
    {
        id: 789,
        path: "*",
        exact: false,
        component: NotFound
    }
]

export default routes