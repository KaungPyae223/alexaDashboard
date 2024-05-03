import React from "react";
import DonutChart from "../Charts/DonutChart";

const ShopDonuts = () => {
  return (
    <div>
      <DonutChart
        DonutData={{ SanChaung: 35, KabarAye: 17, MyayNiGOne: 22, FaceBook: 18, Website: 30 }}
      />
    </div>
  );
};

export default ShopDonuts;
