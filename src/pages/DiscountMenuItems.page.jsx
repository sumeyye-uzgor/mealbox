import React, { useState } from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'
import { addDiscountMenuItem } from '../redux/actions'

function DiscountMenuItems() {
    const dispatch = useDispatch()
    const [menus, setMenus] = useState([])
    const discMenu = useSelector(state => state.selectedDiscountMenu)
    const otherMenus = useSelector(state => state.otherMenus)
    useEffect(() => {
        setMenus(otherMenus.filter(menu => discMenu.subMenus.includes(menu.key)))


    }, [discmenu, otherMenus]
    )
    function handleSelection(item) {
        dispatch(addDiscountMenuItem(item))

    }
    return (
        <PreventAccess >
            {
                menus &&
                <Row className="text-center">
                    {
                        menus.map(
                            (menu, idx) =>
                            (
                                <Col xs={12} key={menu.key}>
                                    <Row style={{ color: "white" }} className="text-center">
                                        {menu.description}
                                    </Row>
                                    <Row>
                                        {menu.items.map(
                                            item => <MenuCard key={item.name} isPrice={item.price ? true : false} menu={item} handleSelection={() => handleSelection(item)} />
                                        )}
                                    </Row>
                                </Col>

                            )
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default DiscountMenuItems