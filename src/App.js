import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideNav } from "./components/Nav/SideNav";
import { Students } from "./components/Students/Students";
import MainChartProvider from "./contexts/MainChartContext";
import MainChartNav from "./components/Charts/MainChartNav";
import MainChart from "./components/Charts/MainChart";
import MainChartLine from "./components/Charts/MainChartLine";
import MainChartArea from "./components/Charts/MainChartArea";
import MainChartHeatmap from "./components/Charts/MainChartHeatmap";
import MainChartRadar from "./components/Charts/MainChartRadar";
import MainChartScatter from "./components/Charts/MainChartScatter";
import StudentSelect from "./components/StudentSelector";
import { Settings } from "./components/Settings/Settings";

export const App = () => {
  return (
    <MainChartProvider>
      <Router>
        <StudentSelect />
        <SideNav />
        <MainChartNav />
        <Switch>
          <Route path="/students" exact component={Students} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/" exact component={MainChart} />
          <Route path="/main-line" exact component={MainChartLine} />
          <Route path="/main-area" exact component={MainChartArea} />
          <Route path="/main-heatmap" exact component={MainChartHeatmap} />
          <Route path="/main-radar" exact component={MainChartRadar} />
          <Route path="/main-scatter" exact component={MainChartScatter} />
        </Switch>
      </Router>
    </MainChartProvider>
  );
};
