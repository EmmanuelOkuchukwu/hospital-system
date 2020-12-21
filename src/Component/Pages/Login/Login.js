import React from 'react';
import { MainLoginContainer, Form, Button } from './LoginStyles';
import CustomTextfield from '../../Layout/CustomComponents/CustomTextfield'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange = (evt) => {
        if(evt.target.name === 'username') {
            this.setState({username: evt.target.value})
        }
        if(evt.target.name === 'password') {
            this.setState({password: evt.target.value})
        }

        // switch(evt.target.name) {
        //     case  'username':
        //         this.setState({username: evt.target.value})
        //     case  'password':
        //         this.setState({password: evt.target.value})
        //     default:
        //         return evt.target.value
        // }
    }
    render() {
        return(
            <div>
                <MainLoginContainer>
                    <Form>
                        <h1>Login</h1>
                        <hr/>
                        <div className="inputs">
                            <CustomTextfield
                                type="text"
                                placeholder="Enter Your username"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <CustomTextfield
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <Button size="lg">Login</Button>
                        </div>
                    </Form>
                </MainLoginContainer>
            </div>
        );
    }
}
