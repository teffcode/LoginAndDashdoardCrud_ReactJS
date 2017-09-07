import React from 'react';

import CardView from '../CardView';
import ProgressClient from './ProgressClient'

const ContentDashboard = () => (

    <CardView 
        cardTitle={"Summary"} 
        cardContent={<ProgressClient/>}
    />
);

export default ContentDashboard;