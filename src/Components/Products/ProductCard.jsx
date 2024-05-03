import React from "react";
import UpComponent from "../Charts/UpComponent";

const ProductCard = () => {
  return (
    <div className="card card-side bg-base-100 ComponentShadow rounded-lg">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Movie"
          className="h-full w-[200px] object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-mono text-xl">I Phone 11 Pro Max</h2>
        <div>
          <p>The Best Selling Phone in This Week</p>

          <div className="text-sm mt-3 flex flex-col gap-1.5">
            <p>
              <span className="font-medium">Brand:</span> Apple
            </p>
            <p>
              <span className="font-medium">Price:</span> 350$
            </p>
            <p>
              <span className="font-medium">Total Sales:</span> 3200$
            </p>
            <p>
              <span className="font-medium">Total Sales Qty:</span> 30
            </p>
            <p>
              <span className="font-medium">Total Orders:</span> 50
            </p>
            <p>
              <span className="font-medium">Total Sale Rate:</span> 12%{" "}
              <UpComponent percent={5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
