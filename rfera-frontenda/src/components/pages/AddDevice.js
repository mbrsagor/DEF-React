import React, { Component } from 'react';
import Header from '../common/Header';
import { Container, Row, Col } from 'react-bootstrap';
import DeviceForm from './DeviceForm'

class AddDevice extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header />
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} offset={3}>
                            <div className="card">
                                <div className="card-header">Add New Device</div>
                                <div className="card-body">
                                    <DeviceForm/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default AddDevice;
