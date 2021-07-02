import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'

function Menu() {
    const foods = useSelector(state => state.selectedMenu)
    console.log(foods)
    return (
        <PreventAccess >
            {
                foods &&
                <Row>
                    {
                        foods.items.map(
                            menu => <MenuCard key={menu.caption} isPrice={true} menu={menu} />
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default Menu