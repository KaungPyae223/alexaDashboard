import React from 'react';
import HorizionalChart from '../Charts/HorizionalChart';
import ChartTitle from '../Charts/ChartTitle';

const MostSellPhone = () => {
    return (
        <div className="ComponentShadow rounded-lg p-3">
            <ChartTitle title={"The Most Sell Phone in Week"}/>
            <HorizionalChart chartlabel={"Qty"} Itemdata={{"iPhone 14 Pro":300,"Samsung Galaxy S20":270,"Oppo Find N1": 200, "Vivo V12": 170, "Huawei Nova 3": 150}}/>
        </div>
    );
};

export default MostSellPhone;