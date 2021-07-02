import React from 'react'
import { Card, Col } from 'react-bootstrap'
import "./MenuCard.style.css"


function MenuCard({ menu, isPrice = false, handleSelection }) {

    return (
        <Col xs={12} md={4} className="my-3">
            <Card className="card-background" style={{
                backgroundImage: `url(${menu.image})`
            }}>
                <Card.Body className="m-auto" >
                    {/* <Link to="/deneme" style={{ textDecoration: "none" }}> */}
                    <Card.Title className="text-center text-light p-3 cardTitle" onClick={handleSelection} style={{ background: 'rgba(0, 0,0,0.5)', borderRadius: "10px" }}>{menu.name.toUpperCase()}</Card.Title>
                    {
                        isPrice &&
                        <Card.Title className="text-center text-light p-3 cardPrice" style={{ background: 'rgba(0, 0,0,0.5)', borderRadius: "10px" }}>Fiyat: &#x20BA;{menu.price}</Card.Title>

                    }
                    {/* </Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MenuCard