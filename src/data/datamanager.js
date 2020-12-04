import { data } from "./database";

const students = [];
let uniqueStudent;
const assignments = [];
const uniqueAssignments = [];

data.forEach(item => students.push(Object.values(item)[0]));
data.forEach(item => assignments.push(Object.values(item)[1]));

/////Get Unique Student Names
export const getStudents = () => {
  uniqueStudent = Array.from(new Set(students));
  return uniqueStudent;
};

/////Get Unique Students Objects
export const getUniqueStudentResult = student => {
  const studentscore = data.filter(item => {
    return item.student === student.student;
  });
  return studentscore;
};

export const getAssignments = () => {
  data.forEach(item => assignments.push(Object.values(item)[1]));
  assignments.forEach(assignment => {
    if (uniqueAssignments.indexOf(assignment) === -1) {
      uniqueAssignments.push(assignment);
    }
  });
  return uniqueAssignments;
};

export const mainChartData = () => {
  const ChartData = getAssignments().map(assignment => {
    const assignments = data.filter(
      item => Object.values(item)[1] === assignment
    );

    const assigmentLenght = assignments.length;

    return {
      assigment: assignment,
      difficulty:
        assignments.reduce((prev, curr) => prev + curr.difficult, 0) /
        assigmentLenght,
      joy:
        assignments.reduce((prev, curr) => prev + curr.joy, 0) /
        assigmentLenght,
    };
  });

  return ChartData;
};
