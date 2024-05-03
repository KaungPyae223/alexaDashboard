import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

const MyanmarGeoChart = () => {
  const data = [
    ["Region", "Total Sold"],
    ["Yangon", 520],
    ["Mandalay", 300],
    ["Ayeyarwady", 110],
    ["Bago", 380],
    ["Magway", 210],
    ["Sagaing", 120],
    ["Tanintharyi", 200],
    ["Shan", 223],
    ["Kachin", 135],
    ["Rakhine", 80],
    ["Kayah", 21],
    ["Kayin", 30],
    ["Chin", 44],
    ["Mon", 220],
  ];

  return (
    <div>
      <Chart
        chartType="GeoChart"
        width="full"  // Uncomment if you want to set width
        height="100%"
        data={data}
        options={{
          region: "MM",
          resolution: "provinces",

          
          defaultColor: "#f5f5f5",
          legend: "none",
          tooltip: { isHtml: true },
        }}
        
      />
    </div>
  );
};

export default MyanmarGeoChart;
