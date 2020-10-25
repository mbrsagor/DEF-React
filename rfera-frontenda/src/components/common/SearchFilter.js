import React, { Component } from 'react';

class SearchFilter extends Component {
    state = {}
    render() { 
        return (
            <>
                <input name="search"
                    className="form-control"
                    placeholder="Search device"
                    type="text"
                />
            </>
        );
    }
}
 
export default SearchFilter;
