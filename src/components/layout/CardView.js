import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';

const CardView = ({cardTitle, cardContent, marginCard}) => (

    <Card 
        title={cardTitle} 
    >
        <div>{cardContent}</div>
    </Card>
);
   
export default CardView;