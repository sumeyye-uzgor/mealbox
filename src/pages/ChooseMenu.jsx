import React from 'react'
import { Row } from 'react-bootstrap'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedMenu, setDiscountSelect, setLastLocation } from '../redux/actions'
import { Link, useHistory } from 'react-router-dom'
function ChooseMenu() {
    const dispatch = useDispatch()
    const history = useHistory()
    const menus = useSelector(state => state.mainMenus)
    function handleMenuSelection(menu) {
        if (menu.caption === 'İndirimli Menüler') {
            dispatch(setDiscountSelect(true))
            dispatch(setLastLocation('/menusecimi'))
            history.push('/indirimlimenusecimi')
        }
        else {
            dispatch(setSelectedMenu(menu))
            dispatch(setLastLocation('/menusecimi'))
            history.push(`/menu/${menu.name.split(' ').join('-').toLowerCase()}`)
        }


    }
    return (
        <PreventAccess >
            {
                menus &&
                <Row>
                    {
                        menus.items.map(
                            menu => <MenuCard key={menu.caption} menu={menu} handleSelection={() => handleMenuSelection(menu)} />
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default ChooseMenu