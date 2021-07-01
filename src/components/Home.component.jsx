import React from 'react'
import { useEffect } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'


function Home() {
    const history = useHistory()
    useEffect(
        () => console.log(document)
    )
    return (
        <Col xs={7} md={6}>
            <Card style={{ backgroundColor: "black" }}>
                {/* <Button className="w-100" variant="light" disabled >Restoranımıza Hoş Geldiniz...</Button> */}

                <Card.Title className="text-center text-light">Restoranımıza Hoş Geldiniz...</Card.Title>
                <img src="https://i.ibb.co/k95HKmm/logo.jpg" alt="logo" />
                <Card.Title className="text-center text-light">
                    <Button className="w-100" variant="dark" style={{ backgroundColor: "black" }} onClick={() => history.push('/deneme')} >Yemek Seçimi İçin Tıklayın...</Button>

                </Card.Title>

            </Card>
        </Col>
    )
}

export default Home