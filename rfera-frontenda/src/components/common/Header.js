import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section className="header_section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Navbar>
                                <Navbar.Brand href="/">RFERA</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <ul className="main_menu mt-3">
                                            <li><Link to="/">Home</Link></li>
                                            <li> <Link to="/add-device">Add Device</Link></li>
                                            <li> <Link to="/event">Event</Link></li>
                                        </ul>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Header;
