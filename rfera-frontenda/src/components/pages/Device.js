import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Header from '../common/Header';
import DeviceService from '../services/DeviceService';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import swal from 'sweetalert';

const device_service = new DeviceService();

class Device extends Component {

    constructor(props) {
        super(props);
        this.state = { devices: [] }
    }

    // Fetch data from server
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

    // Device delete
    handleDelete(e, id) {
        swal({
            title: "Are you sure?",
            text: "will be delete the devices permanently!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true
        })
        .then(willDelete => {
            if (willDelete) {
                var self = this;
                var _data = null;
                device_service.deviceDelete({ id: id })
                .then(() => {
                    _data = self.state.devices.filter(function (obj) {
                        return obj.id !== id;
                    });
                    self.setState({
                        devices: _data
                    })
                });
            }
        })
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
                                        <th>Statue</th>
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
                                                <td>{device.status ? 'Active' : 'Inactive'}</td>
                                                <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{device.created_at}</Moment></td>
                                                <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{device.updated_at}</Moment></td>
                                                <td className="text-center">
                                                    <div className="actions">
                                                        <Link className="btn btn-success btn-sm mr-2" to="/">
                                                            <FeatherIcon icon="edit-2" />
                                                        </Link>
                                                        <Link onClick={e => this.handleDelete(e, device.id)} className="btn btn-danger btn-sm" to="/">
                                                            <FeatherIcon icon="trash" />
                                                        </Link>
                                                    </div>
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
