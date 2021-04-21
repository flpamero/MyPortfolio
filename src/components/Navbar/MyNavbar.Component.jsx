import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/icons/wave.png'

import "./MyNavbar.style.css"


const MyNavbar = () => {
    return (
    <div>
        <Navbar fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme active justify-content-between">
            <div>
            <Navbar.Brand href="#Home">
                    Hi! I'm Francis <btsp></btsp>
                <img className="logo" src={Logo} alt="" />       
            </Navbar.Brand>
            </div>

            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Skills">Tech Skills</Nav.Link>
                    <Nav.Link href="#Contacts">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
    );
};

export default MyNavbar