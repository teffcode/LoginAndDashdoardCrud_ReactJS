import React from 'react';
import { Button } from 'antd';

const ButtonViewMore = ({ showModal }) => (
    <Button icon="plus" onClick={showModal}>View More</Button>
);

export default ButtonViewMore;