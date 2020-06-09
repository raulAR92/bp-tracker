import React from "react";
import Row from "./row/Row";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "./dataTable.scss";

export default function DateTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Titulo</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Sistolica (mmHg)</TableCell>
            <TableCell align="right">Diastolica(mmHg)</TableCell>
            <TableCell align="right">Pulso (/min)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DateTable.propTypes = {
  rows: PropTypes.array.isRequired,
};
