
import React, { Component } from 'react'
import Image from 'next/image'
import { Navbar, NavItem,  Nav, Button, Col, Container, Row, Form, NavDropdown } from "react-bootstrap";

const ResponsiveNavbar = () => {
  return (
  <>

  <div className ="navbar navbar-static-top">
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
         
        <header className="logo" >
        <Navbar.Brand href="/HealthBlock.svg">
        <img
              alt=""
              src="/HealthBlock.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              />{' '}   
        </Navbar.Brand>
        </header>
        
        <header className = "Brand"> 
          <h2> HealthBlock</h2>
        </header> 
        
       
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link href="/about">About</Nav.Link>
            <Button> Create a Smart Contract </Button>  
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    </>
  );
}

export default ResponsiveNavbar;