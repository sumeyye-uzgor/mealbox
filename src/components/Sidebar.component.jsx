import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as FoodIcon } from '../assets/food.svg'

function Sidebar() {
    return (
        <Col xs={12} md={2} className="position-fixed h-100 text-light">
            <Row>Seçtiğiniz Ürünler</Row>
            <Row> <hr /></Row>

        </Col>

    );
}


export default Sidebar