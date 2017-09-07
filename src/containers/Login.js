import React, { Component } from 'react';

import { Label, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Form from '../components/login/NormalLoginForm';
import HomePage from '../pages/HomePage';

class Login extends Component {

  render() {

    return(
      <div>

        <Router>
          <main>
            <Route path="/home" component={HomePage} />
          </main>
        </Router>

        <div className="form">
          <Segment raised className="segmentContainer">
              <Label ribbon 
                style={{                                
                    backgroundColor: '#48D1CC', 
                    color:'white', 
                    padding:'15px', 
                    width:'150px',
                    heigth: '60px',
                    paddingLeft: '37px',
                }}>
                    Admin Login
              </Label>                                              
              <Form/>
          </Segment>
        </div>

      </div>
    );
  }
}

export default Login;