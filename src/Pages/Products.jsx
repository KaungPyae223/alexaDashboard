import React from "react";
import ProductCard from "../Components/Products/ProductCard";
import ProductTableContainer from "../Components/Products/ProductTableContainer";
import HorizionalChart from "../Components/Charts/HorizionalChart";
import MostSellPhone from "../Components/Products/MostSellPhone";
import DonutChart from "../Components/Charts/DonutChart";
import BrandTitle from "../Components/Products/BrandTitle";
import BrandsDonuts from "../Components/Products/BrandsDonuts";
import BrandsContainer from "../Components/Products/BrandsContainer";
import ChartTitle from "../Components/Charts/ChartTitle";
import ProgressChart from "../Components/Charts/ProgressChart";
import PriceRange from "../Components/Products/PriceRange";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <ProductCard />
        <MostSellPhone />
        <BrandsContainer />
        <PriceRange/>
        <div className="col-span-2">
          <ProductTableContainer />
        </div>
      </div>
    </div>
  );
};

export default Products;
