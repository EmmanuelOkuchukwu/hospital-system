import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login/Login';
import Panel from './Component/Pages/Panel/Panel';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}>
                            <Home />
                        </Route>
                        <Route path="/login" component={Login}>
                            <Login />
                        </Route>
                        <Route path="/panel" component={Panel}>
                            <Panel />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
