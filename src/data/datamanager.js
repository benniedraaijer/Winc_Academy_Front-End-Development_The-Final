import { data } from "./database.js";

const students = [];
const assignments = [];

data.forEach(item => students.push(Object.values(item)[0]));
data.forEach(item => assignments.push(Object.values(item)[1]));

/////Get Unique Students and Unique Assignments
export const getStudents = () => Array.from(new Set(students));
export const getAssignments = () => Array.from(new Set(assignments));

/////Get Unique Students Objects
export const getUniqueStudentResult = student =>
  data.filter(item => item.student === student.student);

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
