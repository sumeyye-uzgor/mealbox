import React from 'react'
import { Dropdown, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { openToast, emptySelectedItem, removeSelectedItem, removeDiscountMenu, removeDiscountMenuItem } from '../redux/actions'


function Topbar() {
    const selectedItems = useSelector(state => state.selectedItems)
    const selectedMenu = useSelector(state => state.selectedDiscountMenu)
    const dispatch = useDispatch()
    function handleOrder() {
        if (selectedMenu) {
            if (selectedMenu.items.length === selectedMenu.subMenus.length) {
                dispatch(openToast("Siparişiniz alındı!"))
                dispatch(emptySelectedItem())
                dispatch(removeDiscountMenu())
            }
            else {
                dispatch(openToast("Eksik ya da fazla urun aldiniz. Lutfen, duzeltip tekrar deneyin..."))

            }
        }
    }
    return (
        <Dropdown className="position-fixed" style={{ width: "100vw", height: "70px", zIndex: 3 }}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: "90vw", zIndex: 3 }}>
                Seçtiğiniz Ürünler
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "90vw", zIndex: 3 }} >
                {
                    selectedMenu &&
                    (<>
                        <Dropdown.Item>Seçtiğiniz Menü: {selectedMenu.name}</Dropdown.Item>
                        {selectedMenu.items && selectedMenu.items.map(
                            item =>
                                <Dropdown.Item key={item.name}>
                                    <Col xs={8}>{item.price} &#x20BA;</Col>
                                    <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeDiscountMenuItem(item))}>Sil</Col>
                                    <Col xs={12}> {item.name}</Col>
                                </Dropdown.Item>)}
                        <Col xs={12}>Menü Fiyatı : {selectedMenu.price}</Col>
                        <Col xs={12} style={{ cursor: "pointer" }} onClick={() => dispatch(removeDiscountMenu(selectedMenu))}>Sil</Col>

                    </>)
                }
                {
                    selectedItems && selectedItems.map(
                        item =>
                            <Dropdown.Item key={item.name}>
                                <Col xs={3} >{item.price} &#x20BA;</Col>
                                <Col xs={5}> {item.name}</Col>
                                <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeSelectedItem(item))}>Sil</Col>
                            </Dropdown.Item>
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