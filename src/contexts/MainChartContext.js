import React from "react";
import { mainChartData, getUniqueStudentResult } from "../data/datamanager";

const assigmentAllStudents = [];
const difficultyAllStudents = [];
const joyAllStudents = [];

mainChartData().forEach(item => {
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
        },
      },

      legend: {
        fontSize: "14px",
        markers: {
          radius: 3,
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

  selectStudent = student => {
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
      getUniqueStudentResult(student).forEach(item => {
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
        value={{ ...this.state, selectStudent: this.selectStudent }}>
        {this.props.children}
      </MainChartContext.Provider>
    );
  }
}
