import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TransactionRow = (props) => {
  var name = props.name;
  var amount = props.amount;
  var location = props.location;
  var time = props.time;
  var tags = props.tags;
  var isTaxClaimable = props.isTaxClaimable;
  var percentage = props.percentage;

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{amount}</TableCell>
      <TableCell align="right">
        {location}
        {time}
      </TableCell>
      <TableCell align="right">{tags}</TableCell>
      <TableCell align="right">{isTaxClaimable ? "yes" : "no"}</TableCell>
      <TableCell align="right">{percentage}</TableCell>
    </TableRow>
  );
};

export default TransactionRow;
