import React from "react";
import DataTable from "./dataTable";

export default {
  title: "DataTable",
  component: DataTable,
};

function createData(title, date, systolic, diastolic, pulse) {
  return {
    title,
    date,
    systolic,
    diastolic,
    pulse,
    history: [
      { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
      { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
      { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
    ],
  };
}

const rows = [
  createData("Manana", "2020-01-05", 120, 80, 65),
  createData("Noche", "2020-01-05", 120, 80, 65),
  createData("m", "2020-01-05", 120, 80, 65),
  createData("n", "2020-01-05", 120, 80, 65),
  createData("m2", "2020-01-05", 120, 80, 65),
];

export const table = () => <DataTable rows={rows}></DataTable>;

table.story = {
  name: "table",
};
