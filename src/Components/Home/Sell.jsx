import React from "react";
import SellCard from "./SellCard";

const Sell = () => {
  return (
    <div className="w-full ComponentShadow p-5 rounded-lg">
      <p className="text-2xl font-medium text-center">Sell Report</p>
      <div className="mt-8">
        <SellCard ShopName={"SanChaung"} Sale={"13500"} Qty={120} Percent={5}/>
        <SellCard ShopName={"KabarAye"} Sale={"235000"} Qty={180} Percent={8}/>
        <SellCard ShopName={"MyayNiGone"} Sale={"31250"} Qty={220} Percent={12}/>
        <SellCard ShopName={"FaceBook"} Sale={"133000"} Qty={50} Percent={8}/>
        <SellCard ShopName={"Website"} Sale={"83000"} Qty={17} Percent={14}/>
      </div>
    </div>
  );
};

export default Sell;
