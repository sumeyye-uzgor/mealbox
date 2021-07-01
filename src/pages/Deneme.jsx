import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import PreventAccess from '../components/PreventAccess.component'

function Deneme() {
    return (
        <PreventAccess>
            <Col xs={7} md={6}>
                <Card style={{ backgroundColor: "black" }}>
                    {/* <Button className="w-100" variant="light" disabled >Restoranımıza Hoş Geldiniz...</Button> */}

                    <Card.Title className="text-center text-light">DEneme</Card.Title>
                    <img src="https://i.ibb.co/k95HKmm/logo.jpg" alt="logo" />
                    <Card.Title className="text-center text-light">
                        <Button className="w-100" variant="dark" style={{ backgroundColor: "black" }} >Yemek Seçimi İçin Tıklayın...</Button>

                    </Card.Title>

                </Card>
            </Col>
        </PreventAccess>
    )
}

export default Deneme