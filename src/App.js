import * as React from "react";
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import Navbar from "react-bootstarp/Navbar";
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
// import Api from "./Api";
import Button from 'react-bootstrap/Button';


import './App.css';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar bg="black" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="home"></Navbar.Brand>
            <Nav className="me-auto" style={{ justifyContent: 'flex-end' }}>
              <Button as={Link} to={"/home"} variant="link" className="text-decoration-none me-3" 
              style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>Home</Button>
              <Button as={Link} to={"/about"} variant="link" className="text-decoration-none me-3" 
              style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>About</Button>
              <Button as={Link} to={"/education"} variant="link" className="text-decoration-none me-3" 
              style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>Education</Button>
              <Button as={Link} to={"/contact"} variant="link" className="text-decoration-none" 
              style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>Contact</Button>
            </Nav>
          </Container>
        </Navbar>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div> 
  );
}



export default App;


// import Navbar from "./component/Navbar";
// import "./App.css";

// export default function App () {
//   return (
//     <div className="App">
//       <Navbar/>



//       <h1>Welcome to my personal webpage!</h1>
//       <h2>This webpage offers a glimpse into my world, passions, and interests, 
//     featuring articles on technology, creativity, and personal anecdotes. 
//    Join me on a virtual adventure to explore knowledge and imagination.</h2>

//     </div>
//   );
// }