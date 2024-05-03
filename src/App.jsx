import React from "react";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Products from "./Pages/Products";

import { Route, Routes } from "react-router-dom";
import Orders from "./Pages/Orders";
import Region from "./Pages/Region";

const App = () => {
  return (
    
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home/>} />
        <Route path="sales" element={<Sales/>} />
        <Route path="products" element={<Products/>} />
        <Route path="orders" element={<Orders/>} />
        <Route path="regions" element={<Region/>} />


      </Route>
    </Routes>
  );
};

export default App;
