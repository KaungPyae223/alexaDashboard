import React from "react";
import ChartTitle from "../Charts/ChartTitle";
import PolarAreaChart from "../Charts/PolarAreaChart";

const ProductTypeSale = () => {
  
  return (
    <div className="ComponentShadow p-3 rounded-lg">
      <ChartTitle title={"Items Sale By Type"} />
      <PolarAreaChart ChartData={{"Phone":120,"Phone Accessaries":300,"Gadges":150,"Head Phones":180}}/>
    </div>
  );
};

export default ProductTypeSale;
