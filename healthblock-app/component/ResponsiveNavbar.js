
import React, { Component } from 'react'
import Image from 'next/image'
import { Navbar, NavItem,  Nav, Button, Col, Container, Row, Form, NavDropdown } from "react-bootstrap";
import Web3 from 'web3';

const ResponsiveNavbar = ()  => {
  let web3
  //window.ethereum 
  const connectWalletHandler = async () => {
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){

          try{
              await window.ethereum.request({method: "eth_requestAccounts"})
              web3 = new Web3(window.ethereum)
          } catch(err) {
              setError(err.message)
          }
        
       } else {
          //wallet not installed 
          console.log("Please install metamask")

       }
      } 

  
  return (
  <>
  
  <div className ="navbar navbar-static-top">
    
    <Navbar bg="dark" expand="lg">
      <Container fluid>
      <div className="navbar-end">  
        <header className="logo" >
        <Navbar.Brand href="HealthBlock.svg">
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
        </div>
        
       
       <button onClick={connectWalletHandler} className = "button is-primary" > connect  </button>
      </Container>
    </Navbar>

    </div>
    </>
  );
}

export default ResponsiveNavbar;

/*<div className ="navbar navbar-static-top">
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <div className="navbar-end">  
        <header className="logo" >
        <Navbar.Brand href="HealthBlock.svg">
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
        </div>
        
       
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <div className="navbar-end">  
           
            <Button onclick={connectWalletHandler} className='button is-primary'>  Create a Smart Contract </Button>  
          
          </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    </>
  );
}*/