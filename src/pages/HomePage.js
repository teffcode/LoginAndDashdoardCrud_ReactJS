import React, { Component } from 'react';
import { Layout } from 'antd';

import SideMenu from '../components/layout/MenuSide';
import ButtonHide from '../components/layout/ButtonHide';
import ContentApp from '../components/layout/ContentApp';
import ButtonCreate from '../components/layout/ButtonCreate';
import Modal from '../components/layout/Modal';

import '../App.css';

const { Header, Footer, Sider } = Layout;

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        isMenuCollapsed: false,
        currentMenuItem: "dashboard",
        isVisible: false
      };
  }

  toggleCollapsed = () => {
    this.setState({
      isMenuCollapsed: !this.state.isMenuCollapsed,
    });
  }

  setCurrentMenuItem = (e) => {
    this.setState({ currentMenuItem: e.key });
  }

  showModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <Layout>

       <Sider
          trigger={null}
          collapsible
          collapsed={this.state.isMenuCollapsed}
        >
        <SideMenu 
          stateCollapsed={this.state.isMenuCollapsed}
          handleClick={this.setCurrentMenuItem}
          currentItem={this.state.currentMenuItem}
        />
       </Sider>

       <Layout>
       
        <Header 
          style={{
            padding: '0px', 
            position:'fixed', 
            width:'100%',
            top: '0',
            zIndex: '10'
          }}>
          <ButtonHide 
            handleClick={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            toggleCollapsed={this.toggleCollapsed}
          />
        </Header>

        <ContentApp 
          currentView={this.state.currentMenuItem}   
        >
          <Modal isVisible={this.isVisible}/>
          <ButtonCreate showModal={this.showModal}/>

        </ContentApp>

        <Footer 
          style={{ 
            textAlign: 'center',
          }}>
              Radar v2.0 ©2017 Created by Seti
        </Footer>

       </Layout>

      </Layout>
    );
  }
}

export default App;