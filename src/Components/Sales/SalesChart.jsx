import React from 'react';
import ChartTitle from '../Charts/ChartTitle';
import LineChart from '../Charts/LineChart';

const SalesChart = () => {
    return (
        <div className='p-3 ComponentShadow rounded-lg'>
            <ChartTitle title={"Sale Chart"}/>
            <LineChart ChartData={{"FirstWeek":30,"SecondWeek":20,"ThirdWeek":33,"FourthWeek":27}} ChatLabel={"Chart Qty"}/>
        </div>
    );
};

export default SalesChart;