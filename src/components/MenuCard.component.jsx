import React from 'react'
import { Card, Col } from 'react-bootstrap'
import "./MenuCard.style.css"


function MenuCard({ menu, isPrice = false, handleSelection }) {

    return (
        <Col xs={12} md={5} className="my-3">
            <Card className="card-background" style={{
                backgroundImage: `url(${menu.image})`
            }}>
                <Card.Body className="m-auto" >
                    {/* <Link to="/deneme" style={{ textDecoration: "none" }}> */}
                    <Card.Title className="text-center text-light p-3 cardTitle" onClick={handleSelection} style={{ background: 'rgba(0, 0,0,0.6)', borderRadius: "10px" }}>{menu.name.toUpperCase()}</Card.Title>
                    {
                        isPrice &&
                        <Card.Title className="text-center text-light p-3 cardPrice" style={{ background: 'rgba(0, 0,0,0.6)', borderRadius: "10px" }}>{menu.price}&#x20BA;</Card.Title>

                    }
                    {/* </Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MenuCard