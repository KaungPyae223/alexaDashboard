import React from "react";
import ChartTitle from "../Charts/ChartTitle";
import BrandTitle from "../Products/BrandTitle";
import ShopDonuts from "./ShopDonuts";

const ShopSalesPercent = () => {
  return (
    <div className="ComponentShadow rounded-lg p-3">
      <ChartTitle title={"Percent of Short Sale"} />
      <div className="grid grid-cols-2 items-center">
        <div className="ps-3">
          <BrandTitle index={0} title={"SanChaung"} />
          <BrandTitle index={1} title={"KabarAye"} />
          <BrandTitle index={2} title={"MyayNiGOne"} />
          <BrandTitle index={3} title={"FaceBook"} />
          <BrandTitle index={4} title={"Website"} />
        </div>
        <div>
          <ShopDonuts />
        </div>
      </div>
    </div>
  );
};

export default ShopSalesPercent;
