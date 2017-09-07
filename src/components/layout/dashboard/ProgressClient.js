import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const ProgressClient = () => (
    <div>
        <Progress type="circle" percent={30} width={100} style={{padding:'20px'}}/>
        <Progress type="circle" percent={70} width={100} status="exception" style={{padding:'20px'}}/>
        <Progress type="circle" percent={100} width={100} style={{padding:'20px'}}/>
    </div>
);

export default ProgressClient;

