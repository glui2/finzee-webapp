import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TransactionRow = (props) => {
  var name = props.name;
  var amount = props.amount;
  var time = props.time;
  var comments = props.comments;
  var tags = props.tags;
  var isTaxClaimable = props.isTaxClaimable;
  var percentage = props.percentage;

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        <strong>{name}</strong> {time}
      </TableCell>
      <TableCell align="right">{comments}</TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">{tags}</TableCell>
      <TableCell align="right">{isTaxClaimable ? "yes" : "no"}</TableCell>
      <TableCell align="right">{percentage}</TableCell>
    </TableRow>
  );
};

export default TransactionRow;
