import React from 'react';
import { MainLoginContainer, Form, Button } from './LoginStyles';
import CustomTextfield from '../../Layout/CustomComponents/CustomTextfield';
import SimpleReactValidation from 'simple-react-validator';
import { history } from '../../../History';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validator = new SimpleReactValidation();
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
    componentDidMount() {
        if(!localStorage.getItem('token')) {
            console.log('Token not found.')
        } else {
            let token = '1234@abcd';
            if(localStorage.getItem('token') == token) {
                history.push('/panel')
                window.alert('access granted');
            } else {
                console.log('incorrect access token');
                history.push('/signin');
            }
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if(this.validator.allValid()) {
            const loginCred = {
                username: 'emmanz95',
                password: 'Password@123?'
            }
            if(this.state.username == loginCred.username && this.state.password == loginCred.password) {
                const token = '1234@abcd';
                localStorage.setItem('token', token);
                console.log('Logged in successfully.');
                window.alert('Success Companion for Christ!');
                history.push('/panel');
            }
        } else {
            this.forceUpdate();
            this.validator.showMessages();
        }
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
                            <Button size="lg" onClick={this.handleSubmit}>Login</Button>
                        </div>
                    </Form>
                </MainLoginContainer>
            </div>
        );
    }
}
