import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../assets/img/carousal/cover.PNG'
import Slide2 from '../../assets/img/carousal/Todo.jpg'
import Slide3 from '../../assets/img/carousal/Violet.jfif'
import MyScrollDown from '../MyScrollDown/MyScrollDown'

import "./MyCarousel.style.css"

const MyCarousel = () => {
    return (
    <div id="Home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide1} alt="First slide"/>
            </Carousel.Item>

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
