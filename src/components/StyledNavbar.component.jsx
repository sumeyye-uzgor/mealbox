import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function StyledNavbar() {
    return (
        <Navbar expand="lg" fixed="top" bg="white" style={{ zIndex: 5 }}>
            <Container>
                <Navbar.Brand href="/">MealBox Ev Yemekleri</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="li" >
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link as="li" >
                            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                                Geri
                            </Link>
                        </Nav.Link>

                        <Nav.Link as="li" >
                            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                                Contact
                            </Link>
                        </Nav.Link>
                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}
                        {/* <Nav.Link as="li" > */}
                        {/* </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar >
    )
}

export default StyledNavbar