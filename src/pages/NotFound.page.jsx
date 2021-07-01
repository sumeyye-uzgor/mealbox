import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'



function NotFound() {
    const history = useHistory()

    return (
        <Col xs={7} md={6}>
            <Card style={{ backgroundColor: "black" }}>

                <Card.Title className="text-center text-light">Aradığınız sayfayı bulamadık! ):</Card.Title>
                <Card.Title className="text-center text-light">
                    <Button className="w-100" variant="dark" style={{ backgroundColor: "black" }} onClick={() => history.push('/')} > Anasayfaya Dönmek İçin Tıklayın...</Button>
                </Card.Title>

            </Card >
        </Col >
    )
}

export default NotFound