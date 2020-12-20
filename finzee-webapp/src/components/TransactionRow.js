import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TransactionRow = (props) => {
  var name = props.name;
  var amount = props.amount;
  var time = props.time;
  var comments = props.comment;
  var tags = props.tags;
  var isTaxClaimable = props.isTaxClaimable;
  var percentage = props.percentage;

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        <strong>{name}</strong>
        <br /> {time}
      </TableCell>
      <TableCell align="center">{comments}</TableCell>
      <TableCell align="center">{amount}</TableCell>
      <TableCell align="center">{tags}</TableCell>
      <TableCell align="center">{isTaxClaimable ? "yes" : "no"}</TableCell>
      <TableCell align="center">{percentage}%</TableCell>
    </TableRow>
  );
};

export default TransactionRow;
