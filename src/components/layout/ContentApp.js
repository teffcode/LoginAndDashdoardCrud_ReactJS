import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

import ContentDashboard from './dashboard/ContentDashboard';
import ContentUsers from './users/ContentUsers';
import ContentRoles from './roles/ContentRoles';
import ContentApplications from './applications/ContentApplications';
import ContentPermissions from './permissions/ContentPermissions';

const { Content } = Layout;

const options = [
  { label: 'Local', value: 'Local' },
  { label: 'LDAP', value: 'LDAP' },
];

class ContentApp extends Component{

    constructor(props){
        super(props)
        this.state = {
            isVisible: false,
            isDisabled: false,
            users: [],
            username: '',
            description: '',
            value1: 'Local',
            value2: 'LDAP'
        }
    }

    showModal = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangeDesciption = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    onChangeRadio = (event) => {
        this.setState({
            value1: event.target.value,
            value2: event.target.value
        })
        console.log(this.state.value1)
        if(this.state.value1 === "Local"){
            this.setState({
                isDisabled: true
            })
        } else if(this.state.value1 === "LDAP"){
            this.setState({
                isDisabled: false
            })
        }
    }

    handleCreate = (event) => {
        this.setState({
            isVisible: !this.state.isVisible
        });

        event.preventDefault()
        
        axios.post('http://192.168.27.17:9734/sgapi/restservices/users', {
            username: this.state.username,
            description: this.state.description
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                users: this.state.users.concat(res.data)
            });
        });

    }

    handleCancel = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    }

    componentWillMount() {
        axios.get('http://192.168.27.17:9734/sgapi/restservices/users')
        .then(res => {
            this.setState({ 
                users: res.data 
            });
        });
    }

    renderView() {
        const { currentView } = this.props;

        if(currentView === "dashboard"){
            return <ContentDashboard/>
        } if (currentView === "users") {
            return <ContentUsers 
                        showModal={ this.showModal } 
                        isVisible={ this.state.isVisible } 
                        handleCreate={ this.handleCreate }
                        handleCancel={ this.handleCancel }
                        data={ this.state.users }
                        setFieldValue={this.state.username}
                        onChangeUsername={this.handleChangeUsername}
                        onChangeDescription={this.handleChangeDesciption}
                        isDisabled={this.state.isDisabled}
                        options={options}
                        onChangeRadio={this.onChangeRadio}
                        value1={this.state.value1}
                        defaultValue={this.state.value1}
                    />
        } if (currentView === "roles") {
            return <ContentRoles/>
        } if (currentView === "applications") {
            return <ContentApplications/>
        } if (currentView === "permissions") {
            return <ContentPermissions/>
        } else {
            return <p>Bye</p>
        }
    }

    render(){
        
        return(

            <Content 
                style={{ 
                    margin: '24px 16px 0', 
                    overflow: 'initial' ,
                    marginTop: '80px',
                    marginBottom: '15px'
                }}>
                {this.renderView()}
            </Content>

        );
    }
}

export default ContentApp;