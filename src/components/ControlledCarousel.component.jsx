import React, { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >

            <Carousel.Item>
                deneme
            </Carousel.Item>

            <Carousel.Item>
                deneme
            </Carousel.Item>
            <Carousel.Item >
                deneme
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel