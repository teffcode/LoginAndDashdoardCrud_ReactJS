import React from 'react';

import axios from 'axios';
import { Form, Icon, Input, Checkbox, Button, message } from 'antd';
import { Route, Redirect, withRouter } from 'react-router-dom';

import './NormalLoginForm.css';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

const auth = {
  authenticate (username, password) {

    const appname = "itself"
    const apppasswd = "hTE2Ugzf52jZZHo4XGtCeRMV%2BwybnqYX"

    return new Promise((resolve, reject) => {
      axios({ // validación que devuelve roles de usuario
        method: 'post',
        url: 'http://192.168.27.17:9734/sgapi/restservices/auth/user',
        data: {
          username: username, // admin
          password: password // qazwsx1234
        },
        auth: {
          username: appname,
          password: apppasswd
        }
      })
      .then(response => {
        // validacion de la respuesta
        resolve(true)
        // si la respuesta es mala
        reject(new Error('Error en autenticacion'))
      }).catch(reject => {
        console.log(reject.response)
        message.error(reject.response.data)
      })
    })
  },
}

class NormalLoginForm extends React.Component {

  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
      error: '',
      redirectToReferrer: false
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      auth.authenticate(this.state.username, this.state.password)
      .then(response => {
        this.setState({
          redirectToReferrer: true
        })
      })
    });
  } 

  render() {
    
    const { getFieldDecorator } = this.props.form;
    const { from } = this.props.location && this.props.location.state || { from: { pathname: '/home' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (

      <Form 
        onSubmit={this.handleSubmit} 
        className="login-form"
      >

        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input 
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                placeholder="Username" 
                setFieldValue={this.state.username}
                onChange={this.handleChangeUsername}
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input 
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />} 
                type="password" 
                placeholder="Password" 
                setFieldValue={this.state.password}
                onChange={this.handleChangePassword}
            />
          )}
        </FormItem>

        <FormItem>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
            >
              Log in
            </Button>
        </FormItem>

      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;