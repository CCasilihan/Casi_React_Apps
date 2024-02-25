import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './App.css'; // Assuming you have a CSS file named Contact.css in the same directory


const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Successfully sent your message");
  }

  return (
    <Container>
      <h2 className="h1-responsive font-weight-bold text-center my-5 white-text">
        Contact Me
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 white-text">
      Hello there! Whether you have a question, a collaboration idea, or 
      just want to say hello, I'd love to hear from you. 
      Feel free to reach out using any of the methods below:
      </p>
      <Row>
        <Col md="9" className="md-0 mb-5">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <FormLabel className="white-text">Your name</FormLabel>
                  <FormControl type="text" id="contact-name" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <FormLabel className="white-text">Your email</FormLabel>
                  <FormControl type="text" id="contact-email" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <FormLabel className="white-text">Subject</FormLabel>
                  <FormControl type="text" id="contact-subject" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <FormLabel className="white-text">Your message</FormLabel>
                  <FormControl as="textarea" id="contact-message" />
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center text-md-left">
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
            <p>{message}</p>
          </Form>
        </Col>
        <Col md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt white-text" /> 
              <p className="white-text">Beberon, San Fernado Camarines Sur</p>
            </li>
            <li>
              <i className="fas fa-phone white-text mt-4" />
              <p className="white-text">+63 994-9224-885</p>
            </li>
            <li>
              <i className="fas fa-envelope white-text mt-4" />
              <p className="white-text">casilihancharisse@gmail.com</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;








// import * as React from "react";

// function Contact() {
//   return (
//     <div style={{ textAlign: 'center', color: 'white' }}>
//       <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get in Touch</h1>
//       <p style={{ fontSize: '1.2rem', fontWeight: '' }}>
//         Hello there! Whether you have a question, a collaboration idea, or just want to say hello, I'd love to hear from you. 
//         Feel free to reach out using any of the methods below:
//       </p>

//       <div style={{ textAlign: 'center', color: 'white', fontFamily: 'Arial, sans-serif' }}>
//   <p style={{ marginBottom: '20px' }}>
//     Email: <a href="mailto:ccasilihan@gbox.ncf.edu.ph" style={{ color: 'white', textDecoration: 'none' }}>ccasilihan@gbox.ncf.edu.ph</a><br />
//     Phone: <a href="tel:+15551234567" style={{ color: 'white', textDecoration: 'none' }}>09942885632</a>
//   </p>
//   <p style={{ marginBottom: '20px' }}>
//     Social Media:<br />
//     Facebook: <a href="https://www.facebook.com/charisse.casilihan/" style={{ color: 'white', textDecoration: 'none' }}>Charisse Charmihan Casilihan</a>
//   </p>
// </div>



//     </div>
//   );
// }

// export default Contact;

