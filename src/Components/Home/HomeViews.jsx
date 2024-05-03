import React from 'react';
import ChartTitle from '../Charts/ChartTitle';
import LineChart from '../Charts/LineChart';

const HomeViews = ({ViewTitle,Data,Description}) => {
    return (
        <div className="ComponentShadow p-2">
            <ChartTitle title={ViewTitle}/>
            <LineChart ChartData={Data}/>
            <p className='mt-5 font-bold'>{Description}</p>
        </div>
    );
};

export default HomeViews;