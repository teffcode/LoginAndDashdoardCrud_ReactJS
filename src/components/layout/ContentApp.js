import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

import ContentDashboard from './dashboard/ContentDashboard';
import ContentUsers from './users/ContentUsers';
import ContentRoles from './roles/ContentRoles';
import ContentApplications from './applications/ContentApplications';
import ContentPermissions from './permissions/ContentPermissions';

const { Content } = Layout;

class ContentApp extends Component{

    constructor(props){
        super(props)
        this.state = {
            isVisible: false,
            users: [],
            username: '',
            password: ''
        }
    }

    showModal = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleCreate = (event) => {
        this.setState({
            isVisible: !this.state.isVisible
        });

        event.preventDefault()
        
        axios.post('http://192.168.27.17:9734/sgapi/restservices/users', {
            username: this.state.username
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
                        onChange={this.handleChange}
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