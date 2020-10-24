import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Device extends Component {
    state = {  }
    render() { 
        return (
            <>
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
