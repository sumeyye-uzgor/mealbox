import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as FoodIcon } from '../assets/food.svg'
import { emptySelectedItem, openToast, removeSelectedItem, removeDiscountMenu, removeDiscountMenuItem } from '../redux/actions';

function Sidebar() {
    const selectedItems = useSelector(state => state.selectedItems)
    const selectedMenu = useSelector(state => state.selectedDiscountMenu)
    const dispatch = useDispatch()
    function handleOrder() {
        dispatch(openToast("Siparişiniz alındı!"))
        dispatch(emptySelectedItem())
        dispatch(removeDiscountMenu())
    }
    return (
        <Col xs={12} md={3} className="position-fixed h-100 text-light">
            <Row>Seçtiğiniz Ürünler</Row>
            <Row> <hr /></Row>
            {
                selectedMenu &&
                (<>
                    <Row>Seçtiğiniz Menü: {selectedMenu.name}</Row>
                    {selectedMenu.items && selectedMenu.items.map(
                        item =>
                            <Row key={item.name}>
                                <Col xs={8}>{item.price} &#x20BA;</Col>
                                <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeDiscountMenuItem(item))}>Sil</Col>
                                <Col xs={12}> {item.name}</Col>
                            </Row>)}
                    <Row>Menü Fiyatı : {selectedMenu.price}</Row>
                    <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeDiscountMenu(selectedMenu))}>Sil</Col>

                </>)
            }{
                selectedItems && selectedItems.map(
                    item =>
                        <Row key={item.name}>
                            <Col xs={8}>{item.price} &#x20BA;</Col>
                            <Col xs={4} style={{ cursor: "pointer" }} onClick={() => dispatch(removeSelectedItem(item))}>Sil</Col>
                            <Col xs={12}> {item.name}</Col>
                        </Row>
                )
            }
            <Row className="mt-5">
                <Button disabled={(!selectedItems || selectedItems.length <= 0) && (!selectedMenu || !selectedMenu.lengtgh <= 0)} onClick={handleOrder} variant="light">Sipariş Ver!</Button>
            </Row>

        </Col>

    );
}


export default Sidebar