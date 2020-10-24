import React, { Component } from 'react';


class DeviceForm extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="add_device">
                    <form onSubmit={this.handleSubmit}>
                     <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="day">Enter Availability Day</label>
                            <input type="text"
                                className="form-control"
                                id="day"
                                ref="day"
                                name="day"
                                placeholder="Enter availability Day"
                            />
                            {/* <small className="text-danger">{this.state.department_name}</small> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="start_time">Enter availability start time</label>
                            <input type="time"
                                className="form-control"
                                id="start_time"
                                ref="start_time"
                                name="start_time"
                            />
                            {/* <small className="text-danger">{this.state.employee_type}</small> */}
                        </div>

                        <div className="form-group">
                            <label htmlFor="end_time">Enter availability end time</label>
                            <input type="time"
                                className="form-control"
                                id="end_time"
                                ref="end_time"
                                name="end_time"
                            />
                            {/* <small className="text-danger">{this.state.employee_type}</small> */}
                            </div>
                            <button type="submit" className="btn btn-success btn-sm">Save</button>
                     </div>
                    </form>
                </div>
            </>
        );
    }
}
 
export default DeviceForm;