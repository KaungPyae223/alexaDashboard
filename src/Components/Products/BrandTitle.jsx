import React from "react";

const BrandTitle = ({index,title}) => {
  const Colors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
  ];
  return (
    <div className="flex flex-row gap-3 items-center mb-1.5">
      <div
        className="w-[15px] h-[15px] rounded-full"
        style={{ background: Colors[index] }}
      ></div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default BrandTitle;
