import React, { Component } from 'react';

class SearchFilter extends Component {
    render() { 
        return (
            <>
                <input name="search"
                    className="form-control"
                    placeholder="Search device"
                    type="text"
                    name="name"
                    onChange={this.onChangeHandler}
                />
            </>
        );
    }
}
 
export default SearchFilter;
