import React from 'react';
import { Popconfirm, message, Button } from 'antd';

import ButtonDelete from './ButtonDelete';

import 'antd/dist/antd.css';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const PopConfirm = ({ children }) => (
  <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
    <Popconfirm 
      placement="top"
      title="Are you sure delete this task?" 
      onConfirm={confirm} 
      onCancel={cancel} 
      okText="Yes" 
      cancelText="No"
    >
      {children}
    </Popconfirm>
  </div>
);

export default PopConfirm;