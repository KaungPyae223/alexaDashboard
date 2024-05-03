import React from "react";

const SellCard = ({ShopName,Sale,Qty,Percent}) => {
  return (
    <div>
      <div className="flex gap-5 flex-row items-start border-b py-3 relative">
       
        <div>
          <p className="text-xl font-medium">{ShopName}</p>

          <div className="flex flex-row gap-1.5 items-center mt-1.5 text-sm">
            <p className="font-medium">Total Sale:</p>
            <p>{Sale}$</p>
          </div>
          <div className="flex flex-row gap-1.5 items-center text-sm">
            <p className="font-medium">Total Sale Qty:</p>
            <p>{Qty}</p>
          </div>
        </div>
        <div className="badge badge-warning absolute top-5 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
          {Percent}%
        </div>
      </div>
    </div>
  );
};

export default SellCard;
