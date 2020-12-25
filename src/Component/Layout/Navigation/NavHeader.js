import React, { Component } from 'react';
import { Header, MainTitle } from './NavStyles';
import {history} from "../../../History";

class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout = evt => {
        evt.preventDefault();
        history.push('/login')
        localStorage.removeItem('token')
    }
    render() {
        return(
          <Header>
              <MainTitle>
                  <h2><a href="#">Prayer Journal</a></h2>
              </MainTitle>
                  <ul>
                      <li><a href="#">Dashboard</a></li>
                      <li><a onClick={this.logout}>Logout</a></li>
                      {/*<li><a href="#"></a></li>*/}
                  </ul>
          </Header>
        );
    }
}

export default NavHeader;
