import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../common/Header';

class Error404 extends Component {
    
    render() { 
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h2>Sorry! 404 Not Found</h2>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
 
export default Error404;

