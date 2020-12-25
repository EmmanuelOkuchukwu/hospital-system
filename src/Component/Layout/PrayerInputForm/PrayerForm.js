import React, { Component } from 'react';
import CustomTextfield from '../../Layout/CustomComponents/CustomTextfield';

class PrayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prayerRequest: '',
            mainIssues: '',
            PersonOfInterest: ''
        }
        this.formHandler = this.formHandler.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (evt) =>{
        if(evt.target.name === 'prayerRequest') {
            this.setState({
                prayerRequest: evt.target.value
            })
        }
        if(evt.target.name === 'mainIssues') {
            this.setState({
                mainIssues: evt.target.value
            })
        }
        if(evt.target.name === 'personOfInterest') {
            this.setState({personOfInterest: evt.target.value})
        }
    }
    formHandler = (evt) => {
        evt.preventDefault();
    }
    render() {
        return(
            <div>
                <CustomTextfield
                    type="text"
                    name="prayerRequest"
                    value={this.state.prayerRequest}
                    placeholder="Your Prayer Request"
                    onChange={this.onChange}
                />
                <CustomTextfield
                    type="text"
                    name="mainIssues"
                    value={this.state.mainIssues}
                    placeholder="Your Main Issue"
                    onChange={this.onChange}
                />
                <CustomTextfield
                    type="text"
                    name="personOfInterest"
                    value={this.state.personOfInterest}
                    onChange={this.onChange}
                    placeholder="Person of Interest"
                />
            </div>
        );
    }
}

export default PrayerForm;
