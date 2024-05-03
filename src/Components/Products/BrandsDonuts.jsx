import React from 'react';
import DonutChart from '../Charts/DonutChart';

const BrandsDonuts = () => {
    return (
        <div>
            <DonutChart DonutData={{"Apple":35,"Samsung":21,"Oppo":18,"Vivo":15,"Others":10}}/>
        </div>
    );
};

export default BrandsDonuts;