import { Paper, Table, TableBody } from "@material-ui/core";
import React, { forwardRef } from "react";

import PropTypes from "prop-types";

const TableContainer = forwardRef(function TableContainer(
  { children, ...attributes },
  ref
) {
  return (
    <Paper>
      <Table {...attributes}>
        <TableBody ref={ref}>{children}</TableBody>
      </Table>
    </Paper>
  );
});

TableContainer.propTypes = {
  attributes: PropTypes.any,
  children: PropTypes.any
};

export default TableContainer;
