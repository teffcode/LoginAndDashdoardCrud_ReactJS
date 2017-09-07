import React from 'react';
import { Icon } from 'antd';

import 'antd/dist/antd.css';

const ButtonHide = ({ handleClick, toggleCollapsed }) => (
    <div style={{ background: '#FFF', padding: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.12' }}>
        <Icon
            className="trigger"
            type={handleClick}
            onClick={toggleCollapsed}
        />
    </div>
);

export default ButtonHide;