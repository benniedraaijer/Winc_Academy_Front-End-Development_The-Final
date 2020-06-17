import { data } from "./database";

const students = [];
const uniqueStudent = [];
const assignments = [];
const uniqueAssignments = [];

data.forEach((item) => students.push(Object.values(item)[0]));
data.forEach((item) => assignments.push(Object.values(item)[1]));

/////Get Unique students names
export const getStudents = () => {
  students.forEach((student) => {
    if (uniqueStudent.indexOf(student) === -1) {
      uniqueStudent.push(student);
    }
  });
  return uniqueStudent;
};

/////Get Unique students objects
export const getUniqueStudentResult = (student) => {
  const studentscore = data.filter((item) => {
    return item.student === student.student;
  });
  return studentscore;
};

export const getAssignments = () => {
  data.forEach((item) => assignments.push(Object.values(item)[1]));
  assignments.forEach((assignment) => {
    if (uniqueAssignments.indexOf(assignment) === -1) {
      uniqueAssignments.push(assignment);
    }
  });
  return uniqueAssignments;
};

export const mainChartData = () => {
  const ChartData = getAssignments().map((assignment) => {
    const assignments = data.filter(
      (item) => Object.values(item)[1] === assignment
    );

    const averageJoy =
      assignments.reduce((prev, curr) => prev + curr.joy, 0) /
      assignments.length;
    const averageDifficulty =
      assignments.reduce((prev, curr) => prev + curr.difficult, 0) /
      assignments.length;

    return {
      assigment: assignment,
      difficulty: averageDifficulty,
      joy: averageJoy,
    };
  });

  return ChartData;
};
