import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DeviceService from '../services/DeviceService';

const device_service = new DeviceService();


class DeviceForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            device_id: '',
            device_type: '',
            status: '',
            type1: 'Type 1',
            type2: 'Type 2',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // create handler
    handleCreate() {
        device_service.deviceCreate({
            'name': this.refs.name.value,
            'device_id': this.refs.device_id.value,
            'device_type': this.refs.device_type.value,
            'status': this.refs.status.value
        }).then((response => {
            console.log(response.data);
        })).catch((error) => {
            console.log("Error is: ", error);
        })
    }

    // Submit handler
    handleSubmit(event) {
        this.handleCreate();
    }

    render() { 
        return (
            <>
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
                                            name="name"
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
                                            name="device_id"
                                            placeholder="Enter device id"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="device_type">Enter Device Type</label>
                                        <select value={this.state.value} ref="device_type" className="form-control" name="device_type" id="device_type">
                                            <option value="type1">Type 1</option>
                                            <option value="type2">Type 2</option>
                                            <option value="type3">Type 3</option>
                                            <option value="type4">Type 4</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="custom-control custom-checkbox mt-4">
                                        <input name="status" ref="status" type="checkbox" className="custom-control-input" id="status"/>
                                        <label className="custom-control-label" htmlFor="status">Enter Device Status</label>
                                    </div>
                                </Col>
                            </Row>
                        <button type="submit" className="btn btn-success btn-sm">Save</button>
                     </div>
                    </form>
                </div>
            </>
        );
    }
}
 
export default DeviceForm;