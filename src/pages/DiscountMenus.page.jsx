import React from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'
import { setDiscountSelect, setLastLocation, setSelectedDiscountMenu, addSelectedItem } from '../redux/actions'

function DiscountMenus() {
    const history = useHistory()
    const menus = useSelector(state => state.mainMenus)
    const discMenus = menus.items[0]
    console.log(menus)
    const dispatch = useDispatch()
    function handleSelection(menu) {
        if (menu.subMenus) {
            dispatch(setSelectedDiscountMenu({ ...menu, items: null }))
            dispatch(setLastLocation('/indirimlimenusecimi'))
            history.push(`/indirimlimenu/yemeksecim`)
        } else {
            dispatch(addSelectedItem(menu))
        }
    }
    return (
        <PreventAccess >
            {
                discMenus &&
                <Row>
                    {
                        discMenus.items.map(
                            menu => <MenuCard key={menu.caption} isPrice={true} menu={menu} handleSelection={() => handleSelection(menu)} />
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default DiscountMenus