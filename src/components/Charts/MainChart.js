import React, { Component } from "react";
import "../../css/app.css";
import Chart from "react-apexcharts";
import { MainChartContext } from "../../contexts/MainChartContext";

export default class MainChart extends Component {
  static contextType = MainChartContext;
  constructor(props) {
    super(props);

    this.state = {
      type: "bar",
    };
  }
  render() {
    return (
      <>
        <div className='dashboard-component'>
          <div className='main-chart-container'>
            <Chart
              type={this.state.type}
              series={this.context.series}
              height='100%'
              options={this.context.options}
            />
          </div>
        </div>
      </>
    );
  }
}
