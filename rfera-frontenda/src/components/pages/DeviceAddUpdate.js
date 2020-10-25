import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DeviceService from '../services/DeviceService';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Header from '../common/Header';

const device_service = new DeviceService();


class DeviceAddUpdate extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // show device information form
    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.id) {
            device_service.getDevice(params.id).then((device) => {
                this.refs.name.value = device.name;
                this.refs.device_id.value = device.device_id;
                this.refs.device_type.value = device.device_type;
                this.refs.status.value = device.status;
            });
        }
    }

    // create handler
    handleCreate() {
        device_service.deviceCreate({
            'name': this.refs.name.value,
            'device_id': this.refs.device_id.value,
            'device_type': this.refs.device_type.value,
            'status': this.refs.status.value
        }).then((response => {
            ToastsStore.success('successfully added the device!');
        })).catch((error) => {
            ToastsStore.warning('Something went wrong while creating device.??', error);
        })
    }

    // update department handler
    handleUpdate(id) {
        device_service.deviceupdate({
            'id': id,
            'name': this.refs.name.value,
            'device_id': this.refs.device_id.value,
            'device_type': this.refs.device_type.value,
            'status': this.refs.status.value
        }).then((response => {
            ToastsStore.success('successfully update the device!');
        })).catch((error) => {
            ToastsStore.warning('Something went wrong while updateing device.??', error);
        })
    }

    // Submit handler
    handleSubmit(event) {
        const { match: { params } } = this.props;
        if (params && params.id) {
            this.handleUpdate(params.id);
        } else {
            this.handleCreate();
            event.target.reset();
        }
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="add_device">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card-body">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Enter Device Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="name"
                                                        ref="name"
                                                        placeholder="Enter device name"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="device_id">Enter Device ID</label>
                                                    <input type="number"
                                                        className="form-control"
                                                        id="device_id"
                                                        ref="device_id"
                                                        placeholder="Enter device id"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-group">
                                                    <label htmlFor="device_type">Enter Device Type</label>
                                                    <select ref="device_type" className="form-control" id="device_type">
                                                        <option value="type1">Type 1</option>
                                                        <option value="type2">Type 2</option>
                                                        <option value="type3">Type 3</option>
                                                        <option value="type4">Type 4</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="custom-control custom-checkbox mt-4">
                                                    <input ref="status" type="checkbox" className="custom-control-input" id="status" />
                                                    <label className="custom-control-label" htmlFor="status">Enter Device Status</label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <button type="submit" className="btn btn-success btn-sm">Save</button>
                                    </div>
                                </form>
                                <ToastsContainer store={ToastsStore} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DeviceAddUpdate;
