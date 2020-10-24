import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class DeviceForm extends Component {
    state = {
        values: [
        { name: 'type 1', id: 1 },
        { name: 'type 2', id: 2 },
        { name: 'type 3', id: 3 },
        { name: 'type 4', id: 4 }
      ]
    }
    render() { 
        let optionTemplate = this.state.values.map(v => (
            <option value={v.id}>{v.name}</option>
        ));
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
                                            {optionTemplate}
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="custom-control custom-checkbox mt-4">
                                        <input name="status" ref="status" type="checkbox" className="custom-control-input" id="status"/>
                                        <label className="custom-control-label" for="status">Enter Device Status</label>
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