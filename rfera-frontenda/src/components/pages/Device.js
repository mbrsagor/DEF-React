import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Header from '../common/Header';
import DeviceService from '../services/DeviceService';
import { Link } from 'react-router-dom';

const device_service = new DeviceService();

class Device extends Component {

    constructor(props) {
        super(props);
        this.state = { devices: [] }
    }

    componentDidMount() {
        var self = this;
        device_service.deviceList()
            .then(function (response) {
                self.setState({ devices: response.results });
                console.log(response);
            }).catch(error => {
                console.log("Error: ", error);
            });
    }
    
    render() { 
        return (
            <>
                <Header />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>List of device page</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Device id</th>
                                        <th>Device type</th>
                                        <th>Created date</th>
                                        <th>Updated date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.devices.map(device => {
                                        return (
                                            <tr key={device.id}>
                                                <td>{device.name}</td>
                                                <td>{device.device_id}</td>
                                                <td>{device.device_type}</td>
                                                <td>{device.created_at}</td>
                                                <td>{device.updated_at}</td>
                                                <td className="text-center">
                                                    <Link className="btn btn-success btn-sm mr-2" to="/">update</Link>
                                                    <Link className="btn btn-danger btn-sm" to="/">delete</Link>
                                                </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default Device;
