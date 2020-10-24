import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">RFERA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Device</Nav.Link>
                            <Nav.Link href="#link">Event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;
