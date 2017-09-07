import React from 'react';
import { Menu, Icon } from 'antd';

import 'antd/dist/antd.css';
import './MenuSide.css';

const SubMenu = Menu.SubMenu;

const SideMenu = ({ stateCollapsed, handleClick, currentItem }) => (
    
  <div>
    
    <div className="logo"/>

    <Menu 
      theme="dark" 
      mode="inline"
      inlineCollapsed={stateCollapsed}
      selectedKeys={[currentItem]}
      onClick={handleClick}
    >

      <Menu.Item key="dashboard">
        <Icon type="pie-chart"/>
        <span>Dashboard</span>
      </Menu.Item>

      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user"/> 
            <span>Users Managment</span>
          </span>
        }
      >
        <Menu.Item key="users">
          <span>
            <Icon type="team"/> 
            <span>Users</span>
          </span>
        </Menu.Item>

        <Menu.Item key="roles">
          <span>
            <Icon type="user"/> 
            <span>Roles</span>
          </span>
        </Menu.Item>

        <Menu.Item key="applications">
          <span>
            <Icon type="star-o"/> 
            <span>Applications</span>
          </span>
        </Menu.Item>

        <Menu.Item key="permissions">
          <span>
            <Icon type="lock"/> 
            <span>Permissions</span>
          </span>
        </Menu.Item>

      </SubMenu>

    </Menu>
  
  </div>

);

export default SideMenu;