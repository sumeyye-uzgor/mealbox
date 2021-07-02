import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../assets/BackIcon.svg'
function StyledNavbar() {
    return (
        <Navbar expand="lg" fixed="top" style={{ zIndex: 5, color: 'white', backgroundColor: "black" }}>
            <Container>
                <Navbar.Brand href="/" style={{ color: 'white' }}>MealBox Ev Yemekleri</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="li" >
                            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                Anasayfa
                            </Link>
                        </Nav.Link>


                        <Nav.Link as="li" >
                            <Link to="/iletisim" style={{ textDecoration: "none", color: "white" }}>
                                Contact
                            </Link>
                        </Nav.Link>
                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}
                        {/* <Nav.Link as="li" > */}
                        {/* </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as="li" >
                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                        Geri <BackIcon width="30px" height="40px" />
                    </Link>
                </Nav.Link>

            </Container>
        </Navbar >
    )
}

export default StyledNavbar