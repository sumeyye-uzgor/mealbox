import React from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MenuCard from '../components/MenuCard.component'
import PreventAccess from '../components/PreventAccess.component'
import { addSelectedItem } from '../redux/actions'

function Menu() {
    const foods = useSelector(state => state.selectedMenu)
    const dispatch = useDispatch()
    console.log(foods)
    return (
        <PreventAccess >
            {
                foods &&
                <Row>
                    {
                        foods.items.map(
                            menu => <MenuCard key={menu.caption} isPrice={true} menu={menu} handleSelection={() => dispatch(addSelectedItem(menu))} />
                        )
                    }
                </Row>

            }
        </PreventAccess>
    )
}

export default Menu