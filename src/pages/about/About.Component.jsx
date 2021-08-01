import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'

import "./About.style.css";


const About = () => {
  return (
    <div id="About">
      <div className="about">
      <h1 className="pt-3 text-center font-details pb-3"><strong>About Me</strong></h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          {/*Profile*/}
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-2 mr-2 ">
              <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
            </Row>
          </Col>

          {/*Description*/}
          <Col xs={12} md={6}>
            <Row className="pl-3 pr-3">
              Hi there! I am <strong>&nbsp;Francis Pamero</strong>
                <br />A passionate Developer and Willing to learn more about development, residing in Philippines.
                I am a Developer who started learning and studying different language and environment in terms of Web development.
                <br />
                In 2020, I successfully completed my course Bs in Information System in City College of Angeles.
                <br />
                Working with the clients, my goal is always driven towards providing
                amazing experience with the best level of quality and service to them. 
                <br />I love learning about new technologies and what problems are they solving
                and How can I use them to build better and scalable products.
                <br /> <br />
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default About
