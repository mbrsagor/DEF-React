import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../common/Header';

class Device extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>Hello we are Device page</h2>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default Device;
