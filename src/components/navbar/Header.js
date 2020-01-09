import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
import './Navbar.css'

const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="#">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#work">WORK</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        <Nav.Link href="#link">BLOG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;