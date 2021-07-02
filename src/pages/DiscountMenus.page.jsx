import React from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'
import { setDiscountSelect, setLastLocation, setSelectedDiscountMenu } from '../redux/actions'

function DiscountMenus() {
    const history = useHistory()
    const menus = useSelector(state => state.mainMenus)
    const discMenus = menus.items[0]
    const dispatch = useDispatch()
    function handleSelection(menu) {
        dispatch(setSelectedDiscountMenu({ ...menu, items: null }))
        dispatch(setLastLocation('/indirimlimenusecimi'))
        history.push(`/indirimlimenu/yemeksecim`)
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