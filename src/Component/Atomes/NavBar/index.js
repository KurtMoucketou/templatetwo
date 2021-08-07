import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarStc from './Navbar.stc';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

    
    const NavBar = (props) => {

      return (
    <NavBarStc>
        <Navbar className="w-100" bg="with" expand="lg">
            <Container className="w-100">
                <div className="w2-row">  
                    <Navbar.Brand href="#home">
                    <div className="w3-col s3 justify-content-start">
                        <h2>Logo</h2>
                    </div>
                        </Navbar.Brand>
                    <div className="w3-col s9 w-100">
                            <Nav className="nav-text mx-auto w-100">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#home">Info</Nav.Link>
                                <Nav.Link href="#link">Services</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </div>
                </div>  
            </Container>
        </Navbar>

        </NavBarStc>
      );
    }
    
    export default NavBar;