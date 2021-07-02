import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as FoodIcon } from '../assets/food.svg'
import { removeSelectedItem } from '../redux/actions';

function Sidebar() {
    const selectedItems = useSelector(state => state.selectedItems)
    const dispatch = useDispatch()
    return (
        <Col xs={12} md={3} className="position-fixed h-100 text-light">
            <Row>Seçtiğiniz Ürünler</Row>
            <Row> <hr /></Row>
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
                <Button disabled={selectedItems.length <= 0} variant="light">Sipariş Ver!</Button>
            </Row>

        </Col>

    );
}


export default Sidebar