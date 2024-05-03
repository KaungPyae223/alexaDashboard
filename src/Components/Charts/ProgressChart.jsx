import React from "react";

const ProgressChart = ({title,percent}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <p className="basis-1/3 font-medium">{title}</p>
      <div className="basis-2/3">
        <progress
          className="progress progress-secondary h-3 "
          value={percent}
          max="100"
        ></progress>
        <p className="text-sm">{percent}%</p>
      </div>
    </div>
  );
};

export default ProgressChart;
