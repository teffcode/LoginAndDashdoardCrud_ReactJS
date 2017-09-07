import React from 'react';
import { Table } from 'antd';

import PopConfirm from '../PopConfirm';

import 'antd/dist/antd.css';

const columns = [
  { title: 'Username', dataIndex: 'username', width: 300 },
  { title: 'Description', dataIndex: 'description', width: 400 },
  {
    title: 'Actions',
    dataIndex: '',
    key: 'x',
    render: () => <PopConfirm/>
  },
];

const TableUsers = ({ data }) => (
  <Table 
    columns={columns}
    dataSource={data}
    bordered
  />
);

export default TableUsers;