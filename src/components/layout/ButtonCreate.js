import React from 'react';
import { Button } from 'antd';

import 'antd/dist/antd.css';

const ButtonCreate = ({ showModal}) => (
    <div style={{marginBottom:"25px"}}>
        <Button 
            onClick={ showModal }
            type="primary" 
            icon="user-add" 
            ghost>

            Create
        </Button>
    </div>
);

export default ButtonCreate;
