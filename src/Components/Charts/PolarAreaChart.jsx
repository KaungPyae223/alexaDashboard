import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = ({ChartData}) => {
  const data = {
    labels: Object.keys(ChartData),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(ChartData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <PolarArea data={data} />
    </div>
  );
};

export default PolarAreaChart;
