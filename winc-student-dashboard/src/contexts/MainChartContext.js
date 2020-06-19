import React from "react";
import { mainChartData } from "../data/datamanager";
import { getUniqueStudentResult } from "../data/datamanager";

const assigmentAllStudents = [];
const difficultyAllStudents = [];
const joyAllStudents = [];

mainChartData().forEach((item) => {
  assigmentAllStudents.push(Object.values(item)[0]);
  difficultyAllStudents.push(Object.values(item)[1]);
  joyAllStudents.push(Object.values(item)[2]);
});

export const MainChartContext = React.createContext();

export default class MainChartProvider extends React.Component {
  state = {
    options: {
      dataLabels: {
        enabled: false,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          barHeight: "100%",
          distributed: false,
          rangeBarOverlap: true,

          dataLabels: {
            position: "top",

            hideOverflowingLabels: false,
          },
        },
      },

      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },

      chart: {
        background: "#f4f4f4",
        foreColor: "#333",
      },

      xaxis: {
        type: "category",

        categories: assigmentAllStudents,

        labels: {
          show: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 100,
          hideOverlappingLabels: true,
          rotate: -90,
          rotateAlways: true,
          offsetY: 0,
        },
      },
    },

    series: [
      {
        name: "Difficulty",
        data: difficultyAllStudents,
      },
      {
        name: "Joy",
        data: joyAllStudents,
      },
    ],
  };

  selectStudent = (student) => {
    const assigments = [];
    const difficulty = [];
    const joy = [];

    if (student === "all") {
      this.setState({
        xaxis: {
          categories: assigmentAllStudents,
        },

        series: [
          {
            name: "Difficulty",
            data: difficultyAllStudents,
          },
          {
            name: "Joy",
            data: joyAllStudents,
          },
        ],
      });
    } else {
      getUniqueStudentResult(student).forEach((item) => {
        assigments.push(Object.values(item)[1]);
        difficulty.push(Object.values(item)[2]);
        joy.push(Object.values(item)[3]);
      });

      this.setState({
        xaxis: {
          categories: assigments,
        },

        series: [
          {
            name: "Difficulty",
            data: difficulty,
          },
          {
            name: "Joy",
            data: joy,
          },
        ],
      });
    }
  };

  render() {
    return (
      <MainChartContext.Provider
        value={{ ...this.state, selectStudent: this.selectStudent }}
      >
        {this.props.children}
      </MainChartContext.Provider>
    );
  }
}
