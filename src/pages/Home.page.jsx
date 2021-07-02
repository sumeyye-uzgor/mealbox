import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setLastLocation } from '../redux/actions'

function Home() {
    const history = useHistory()
    const dispatch = useDispatch()
    function handleClick() {
        history.push('/menusecimi')
        dispatch(setLastLocation('/'))
    }
    return (
        <Col xs={7} md={6} style={{ marginTop: "100px" }}>
            <Card style={{ backgroundColor: "black" }}>
                <Card.Title className="text-center text-light">Restoranımıza Hoş Geldiniz...</Card.Title>
                <img src="https://i.ibb.co/k95HKmm/logo.jpg" alt="logo" />
                <Card.Title className="text-center text-light">
                    <Button className="w-100" variant="dark" style={{ backgroundColor: "black" }} onClick={handleClick}> Yemek Seçimi İçin Tıklayın...</Button>
                </Card.Title>

            </Card >
        </Col >
    )
}

export default Home