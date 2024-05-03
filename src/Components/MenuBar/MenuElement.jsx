import React from "react";
import { NavLink } from "react-router-dom";

const MenuElement = ({icons,title,link}) => {
  return (
    <NavLink to={link} className="flex items-center px-3 py-3 rounded-lg cursor-pointer Link duration-150 flex-row gap-3 ">
      {icons}
      <p>{title}</p>
    </NavLink>
  );
};

export default MenuElement;
