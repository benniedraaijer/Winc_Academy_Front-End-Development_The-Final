import React, { Component } from "react";
import { getStudents } from "../data/datamanager";
import { MainChartContext } from "../contexts/MainChartContext";

export default class StudentSelect extends Component {
  static contextType = MainChartContext;

  render() {
    const students = getStudents();
    const { selectStudent } = this.context;
    return (
      <div className='student-select-buttons-container'>
        <button
          autofocus='true'
          onClick={() => selectStudent("all")}
          className='student-select-buttons '
          key='all'>
          All
        </button>
        {students.map(student => (
          <button
            onClick={() => selectStudent({ student })}
            className='student-select-buttons'
            key={student}
            value={student}>
            {student}
          </button>
        ))}
      </div>
    );
  }
}
