import React from 'react'
import { Dropdown, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { openToast, emptySelectedItem, removeSelectedItem } from '../redux/actions'

function Topbar() {
    const selectedItems = useSelector(state => state.selectedItems)
    const dispatch = useDispatch()
    function handleOrder() {
        dispatch(openToast("Siparişiniz alındı!"))
        dispatch(emptySelectedItem())
    }
    return (
        <Dropdown className="position-fixed" style={{ width: "100vw", height: "70px", zIndex: 3 }}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "90vw", zIndex: 3 }}>
                Seçtiğiniz Ürünler
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "90vw", zIndex: 3 }} >
                {
                    selectedItems && selectedItems.map(
                        item => <Row>
                            <Col xs={8}>{item.price} &#x20BA;</Col>
                            <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeSelectedItem(item))}>Sil</Col>
                            <Col xs={12}> {item.name}</Col>

                        </Row>
                    )
                }
                <Row className="mt-5">
                    <Button disabled={!selectedItems || selectedItems.length <= 0} onClick={handleOrder} variant="dark">Sipariş Ver!</Button>
                </Row>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default Topbar