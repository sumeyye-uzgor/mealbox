import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import TimeLine from './TimeLine.component'
import Sidebar from './Sidebar.component'
function PreventAccess({ children, redirectPath = "/", isPassable = false, isPathTrack = false }) {
    const history = useHistory()
    useEffect(() => {
        if (history.action === 'POP') {
            history.push(redirectPath)
        }
    })
    return (
        <Container className="justify-content-center align-items-center m-0 mt-5" >
            {isPathTrack ?

                <Row className="justify-content-center align-items-center m-0">

                    {children}

                    <TimeLine />

                </Row>

                :
                <Row className="m-0">
                    <Col className="d-none d-md-block position-fixed" md={2} style={{ paddingTop: "70px" }}>
                        <Sidebar />
                    </Col>
                    <Col className="d-none d-md-block" md={3} />
                    <Col xs={12} md={9} style={{ paddingTop: "70px" }}>
                        {children}
                    </Col>

                </Row>

            }

        </Container>
    )
}

export default PreventAccess