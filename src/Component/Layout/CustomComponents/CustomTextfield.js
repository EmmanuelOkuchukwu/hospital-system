import React, { Component } from 'react';
import { TextField } from '../../Pages/Login/LoginStyles'

class CustomTextfield extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TextField
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

export default CustomTextfield;
