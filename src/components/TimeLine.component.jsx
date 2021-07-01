import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as FoodIcon } from '../assets/food.svg'

function TimeLine() {
    return (
        <Col xs={1} className="align-items-right">
            <Row style={{ color: "white" }}>
                <FoodIcon width="50px" height="70px" color="white" />
                DENEME1

            </Row>
            <Row>
                <FoodIcon width="20px" height="40px" />
                DENEME2

            </Row>
        </Col>
    );
}


export default TimeLine