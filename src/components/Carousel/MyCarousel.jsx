import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
//import Slide1 from '../../assets/img/carousal/BG'
import Slide2 from '../../assets/img/carousal/BG1.jpg'
import Slide3 from '../../assets/img/carousal/BG2.jpg'
import MyScrollDown from '../MyScrollDown/MyScrollDown'

import "./MyCarousel.style.css"

const MyCarousel = () => {
    return (
    <div id="Home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
    <MyScrollDown />
    </div>
    )
}

export default MyCarousel
