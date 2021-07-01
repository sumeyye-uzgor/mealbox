import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory, Redirect } from 'react-router-dom'
import ControlledCarousel from './ControlledCarousel.component'
import TimeLine from './TimeLine.component'
function PreventAccess({ children, redirectPath = "/", isPassable = false, isPathTrack = true }) {
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
                <Row className="justify-content-center align-items-center m-0">

                    {children}
                </Row>

            }

        </Container>
    )
}

export default PreventAccess