import React from "react";
import ProductTableTr from "./ProductTableTr";

const ProductTables = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm">
              <th>Name</th>
              <th>Price</th>
              <th>Total Sold</th>
              <th>Sold Rate</th>
              <th>Release Date</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProductTableTr/>
            <ProductTableTr/>
            <ProductTableTr/>
            <ProductTableTr/>
            <ProductTableTr/>
            <ProductTableTr/>
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTables;
