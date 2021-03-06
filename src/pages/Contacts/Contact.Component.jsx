import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Contact.Style.css";

const ContactForm = () => {
  return (
    <div id="Contacts">
      <h1 className="pt-3 text-center font-details-b pb-3"><strong>CONTACT ME</strong></h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="flpamero.cca@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="Francispamero12@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/francis-pamero-1ba442187/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/flpamero" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My Github Account">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;