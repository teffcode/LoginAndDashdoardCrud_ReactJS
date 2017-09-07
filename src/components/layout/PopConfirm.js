import React from 'react';
import { Popconfirm, message } from 'antd';

import 'antd/dist/antd.css';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const PopConfirm = ({ handleClick, toggleCollapsed }) => (
    <Popconfirm 
      title="Are you sure delete this task?" 
      onConfirm={confirm} 
      onCancel={cancel} 
      okText="Yes" 
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
);

export default PopConfirm;