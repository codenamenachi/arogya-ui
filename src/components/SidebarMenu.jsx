// Filename - components/SubMenu.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  return (
    <>
      <Link className="sidebar-link" to={item.path}>
        <div>
          <span className="sidebar-label">{item.title}</span>
        </div>
      </Link>
    </>
  );
};

export default SubMenu;
