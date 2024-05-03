import React from "react";
import ParentMenu from "../Components/MenuBar/ParentMenu";
import Sales from "./Sales";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <ParentMenu />
      <div className="flex-1 p-6 h-screen overflow-y-scroll no-scrollbar">
        <Outlet/>
      </div>
    </div>
  );
};

export default Main;
