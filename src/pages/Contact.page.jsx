import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as GithubIcon } from '../assets/GithubIcon.svg'
import { ReactComponent as LinkedinIcon } from '../assets/LinkedinIcon.svg'
import { ReactComponent as MediumIcon } from '../assets/MediumIcon.svg'
import { ReactComponent as WebsiteIcon } from '../assets/WebsiteIcon.svg'

function Contact() {
    return (
        <Container>
            <Row className="justify-content-center my-5" style={{ fontSize: "30px" }}>
                <Col xs={12} md={8} className="text-center text-light">
                    İletişim
                </Col>
            </Row>
            <Row className="justify-content-center my-2">
                <Col xs={12} md={10} className="text-center">
                    <Card >
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs={12} md={6}>
                                    <iframe style={{ width: "100%" }} title="deneme" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" >
                                    </iframe>
                                </Col>
                                <Col xs={12} md={6}>
                                    <h4 className="text-center">
                                        Designers & Developers
                                    </h4>
                                    <Card.Title>
                                        <Row>
                                            <a style={{ textDecoration: "none", color: "inherit" }} rel="noopener noreferrer" href="https://sumeyye-uzgor.netlify.app/" target="_blank">
                                                Sümeyye Üzgör
                                            </a>
                                        </Row>

                                        <Row>
                                            <a style={{ textDecoration: "none", color: "inherit" }} rel="noopener noreferrer" href="https://github.com/sumeyye-uzgor" target="_blank">
                                                <span className="me-2">github.com/sumeyye-uzgor</span>
                                                <GithubIcon width="30px" height="54px" />
                                            </a>
                                        </Row>
                                        <Row>
                                            <a style={{ textDecoration: "none", color: "inherit" }} rel="noopener noreferrer" href="https://linkedin.com/in/summeyye-uzgor" target="_blank">
                                                <span className="me-2">linkedin.com/in/summeyye-uzgor</span>
                                                <LinkedinIcon width="30px" height="54px" />
                                            </a>
                                        </Row>
                                        <Row>
                                            <a style={{ textDecoration: "none", color: "inherit" }} rel="noopener noreferrer" href="https://sumeyye-uzgor.medium.com/" target="_blank">
                                                <span className="me-2">medium.com/@sumeyye-uzgor</span>
                                                <MediumIcon width="30px" height="54px" />
                                            </a>
                                        </Row>
                                        <Row>
                                            <a style={{ textDecoration: "none", color: "inherit" }} rel="noopener noreferrer" href="https://sumeyye-uzgor.netlify.app/projects" target="_blank">
                                                <span className="me-2">Portfolio | Prev. Works</span>
                                                <WebsiteIcon width="30px" height="54px" />
                                            </a>
                                        </Row>


                                    </Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
export default Contact;