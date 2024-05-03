import React from "react";
import SalesHeader from "../Components/Sales/SalesHeader";
import ProductTypeSale from "../Components/Sales/ProductTypeSale";
import ShopSales from "../Components/Sales/ShopSales";
import SalesChart from "../Components/Sales/SalesChart";
import ShopSalesPercent from "../Components/Sales/ShopSalesPercent";

const Sales = () => {
  return (
    <div>
      <SalesHeader />
      <div className="grid grid-cols-3 gap-3">
        
          <ProductTypeSale/>
          <ShopSales/>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
          <SalesChart/>
          <ShopSalesPercent/>
      </div>
    </div>
  );
};

export default Sales;
