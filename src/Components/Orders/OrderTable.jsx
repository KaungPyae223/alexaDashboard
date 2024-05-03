import React from "react";
import OrderTableTr from "./OrderTableTr";

const OrderTable = () => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm">
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Location</th>
              <th>Order Date</th>
              <th>Deliever Status</th> 
            </tr>
          </thead>
          <tbody>
            <OrderTableTr DelieveryStatus={""}/>
                             
            
          </tbody>
        </table>
      </div>
  );
};

export default OrderTable;
