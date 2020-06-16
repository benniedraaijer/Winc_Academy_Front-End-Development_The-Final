import React from "react";
import { NavLink } from "react-router-dom";

export default class MainChartNav extends React.Component {
  render() {
    return (
      <ul className="main-chart-nav-container">
        <NavLink
          exact
          to="/"
          className="main-chart-nav-buttons"
          activeClassName="main-chart-nav-buttons-active"
        >
          Bar
        </NavLink>
        <NavLink
          exact
          to="/main-line"
          className="main-chart-nav-buttons"
          activeClassName="main-chart-nav-buttons-active"
        >
          Line
        </NavLink>
        <NavLink
          exact
          to="/main-area"
          className="main-chart-nav-buttons"
          activeClassName="main-chart-nav-buttons-active"
        >
          Area
        </NavLink>
        <NavLink
          exact
          to="/main-heatmap"
          className="main-chart-nav-buttons"
          activeClassName="main-chart-nav-buttons-active"
        >
          Heatmap
        </NavLink>
        <NavLink
          exact
          to="/main-radar"
          className="main-chart-nav-buttons"
          activeClassName="main-chart-nav-buttons-active"
        >
          Radar
        </NavLink>
        <NavLink
          exact
          to="/main-scatter"
          className="main-chart-nav-buttons main-chart-nav-button-6"
          activeClassName="main-chart-nav-buttons-active"
        >
          Scatter
        </NavLink>
      </ul>
    );
  }
}
