import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/styles/navBar.css';
import Logo from '../images/logo.png';

function NavBar() {
  return (
    <>
      <Navbar className='navbar-custom'>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} width="50" height="50" className="d-inline-flex align-center" alt="React Bootstrap logo"/>
            <h1 className='d-inline-flex ms-3'>Soundwave</h1>
          </Navbar.Brand>
          <Navbar>
            <Link className="navbar-item me-3" activeClassName="is-active" to="/Discover" exact>Discover</Link>
            <Link className="navbar-item" activeClassName="is-active" to="/Join" exact>Join</Link>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}
  
  export default NavBar;