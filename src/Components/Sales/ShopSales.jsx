import React from 'react';
import ChartTitle from '../Charts/ChartTitle';
import HorizionalChart from '../Charts/HorizionalChart';
import VerticalChart from '../Charts/VerticalChart';

const ShopSales = () => {
    return (
        <div className="ComponentShadow p-3 rounded-lg col-span-2">
            <ChartTitle title={"Shop Sale Rate"}/>
            <VerticalChart chartlabel={"Sale Qty"} Itemdata={{"SanChaung":100,"KabarAye":180,"MyayNiGone":70,"FaceBook":50,"Website":20}}/>
            
        </div>
    );
};

export default ShopSales;