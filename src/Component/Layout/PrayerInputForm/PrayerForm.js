import React, { Component } from 'react';
import CustomTextfield from '../../Layout/CustomComponents/CustomTextfield';
import { CustomButton } from '../CommonStyles';
import SimpleReactValidation from 'simple-react-validator'

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
        this.validator = new SimpleReactValidation();
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
        if(this.validator.allValid()) {
            //TODO: Add logic
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
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
                {this.validator.message('prayerRequest', this.state.prayerRequest, 'required|min:10|max:25', {className: 'text-danger'})}
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
                <CustomButton onClick={this.formHandler}>Post</CustomButton>
            </div>
        );
    }
}

export default PrayerForm;
