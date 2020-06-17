import React from "react";
import "../../css/nav.css";
import { SideNavMenu } from "./SideNavMenu";
import { SideNavUser } from "./SideNavUser";

export const SideNav = () => {
  return (
    <div className="nav-sidebar">
      <SideNavUser />
      <SideNavMenu />
      <div className="logout-btn-container">
        <button className="logout_btn">logout</button>
      </div>
    </div>
  );
};
