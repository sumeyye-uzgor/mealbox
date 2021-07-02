import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'

function DiscountMenuItems() {
    const menus = useSelector(state => state.mainMenus)
    const discMenus = menus.items[0]
    console.log(discMenus)
    return (
        <PreventAccess >
            {
                discMenus &&
                <Row>
                    {
                        discMenus.items.map(
                            menu => <MenuCard key={menu.caption} isFromDiscount={true} menu={menu} />
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default DiscountMenuItems