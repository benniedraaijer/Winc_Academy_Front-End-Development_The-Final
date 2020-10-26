import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavMenu = () => {
  return (
    <ul className="menu">
      <NavLink
        exact
        to="/"
        className="menu-link"
        activeClassName="menu-link-active"
      >
        <i className=" link-icon fas fa-tachometer-alt"></i>
        <span className="link-title">Dashboard</span>
      </NavLink>
      <NavLink
        exact
        to="students"
        className="menu-link"
        activeClassName="menu-link-active"
      >
        <i className="link-icon fas fa-user-graduate"></i>
        <span className="title">Students</span>
      </NavLink>
      <NavLink exact to="settings" className="menu-link" activeClassName="menu-link">
        <i className="link-icon fas fa-cog"></i>
        <span className="title">Settings</span>
      </NavLink>
      <NavLink exact to="" className="menu-link" activeClassName="menu-link">
        <i className="link-icon far fa-question-circle"></i>
        <span className="title">Help</span>
      </NavLink>
    </ul>
  );
};
