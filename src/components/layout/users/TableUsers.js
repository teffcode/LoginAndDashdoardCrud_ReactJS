import React from 'react';
import { Table } from 'antd';

import PopConfirm from '../PopConfirm';
import ViewMoreUsers from './ViewMoreUsers';

import 'antd/dist/antd.css';

const columns = [
  { title: 'Username', dataIndex: 'username', width: 450 },
  { title: 'Description', dataIndex: 'description', width: 450 },
  {
    title: 'Actions',
    colSpan: 2,
    dataIndex: '',
    width: 200,
    render: () => <ViewMoreUsers/>
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