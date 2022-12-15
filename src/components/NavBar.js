import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../components/styles/NavBar.css'

function NavBar() {
    return (
      <>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="./images/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;