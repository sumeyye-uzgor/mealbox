import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Sidebar from './Sidebar.component'
import Topbar from './Topbar.component'
function PreventAccess({ children, redirectPath = "/" }) {
    const history = useHistory()
    useEffect(() => {
        if (history.action === 'POP') {
            history.push(redirectPath)
        }
    }

    )

    return (
        <Container className="justify-content-center align-items-center m-0 mt-5">

            <Row className="m-0">
                <Col className="d-flex d-md-none mb-5" xs={12} style={{ paddingTop: "70px" }}>
                    <Topbar />
                </Col>
                <Col className="d-none d-md-block position-fixed" md={3} style={{ paddingTop: "70px" }}>
                    <Sidebar />
                </Col>
                <Col className="d-none d-md-block" md={4} />
                <Col xs={12} md={8} className="mt-5">
                    {children}
                </Col>

            </Row>


        </Container>
    )
}

export default PreventAccess