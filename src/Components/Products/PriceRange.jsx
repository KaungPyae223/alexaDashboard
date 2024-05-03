import React from "react";
import ChartTitle from "../Charts/ChartTitle";
import ProgressChart from "../Charts/ProgressChart";

const PriceRange = () => {
  return (
    <div className="ComponentShadow rounded-lg p-3">
      <ChartTitle title={"Sold By Price Range"} />
      <div className="p-5 flex flex-col gap-3">
        <ProgressChart title={"$100000 over"} percent={8} />
        <ProgressChart title={"$50000 ~ $100000"} percent={12} />
        <ProgressChart title={"$30000 ~ $50000"} percent={26} />
        <ProgressChart title={"$10000 ~ $30000"} percent={24} />
        <ProgressChart title={"$10000 under"} percent={30} />
      </div>
    </div>
  );
};

export default PriceRange;
