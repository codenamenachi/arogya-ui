import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SidebarMenu from "./SidebarMenu";
import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
  background: #7ac6a4;
  width: 150px;
  height: 100%;
  display: block;
  justify-content: center;
  position: absolute;
  top: 150px;
  left: 0px;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
