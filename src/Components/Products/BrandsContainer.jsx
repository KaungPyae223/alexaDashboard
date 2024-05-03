import React from 'react';
import BrandsDonuts from './BrandsDonuts';
import BrandTitle from './BrandTitle';
import ChartTitle from '../Charts/ChartTitle';

const BrandsContainer = () => {
    return (
        <div className="ComponentShadow rounded-lg p-3">
          <ChartTitle title={"Top Sale Brands"}/>
          <div className="flex flex-row items-center">
            <div className="basis-1/3 ps-3">
              <BrandTitle index={0} title={"Apple"}/>
              <BrandTitle index={1} title={"Samsung"}/>
              <BrandTitle index={2} title={"Oppo"}/>
              <BrandTitle index={3} title={"Vivo"}/>
              <BrandTitle index={4} title={"Others"}/>
            </div>
            <div className="basis-2/3">
              <BrandsDonuts />
            </div>
          </div>
        </div>
    );
};

export default BrandsContainer;