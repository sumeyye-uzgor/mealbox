import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function Home() {
    const history = useHistory()

    return (
        <Col xs={7} md={6} style={{ marginTop: "100px" }}>
            <Card style={{ backgroundColor: "black" }}>
                <Card.Title className="text-center text-light">Restoranımıza Hoş Geldiniz...</Card.Title>
                <img src="https://i.ibb.co/k95HKmm/logo.jpg" alt="logo" />
                <Card.Title className="text-center text-light">
                    <Button className="w-100" variant="dark" style={{ backgroundColor: "black" }} onClick={() => history.push('/menusecimi')} > Yemek Seçimi İçin Tıklayın...</Button>
                </Card.Title>

            </Card >
        </Col >
    )
}

export default Home