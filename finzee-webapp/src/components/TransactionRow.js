import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TagButton from "./TagButton.js";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Grid } from "@material-ui/core";

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
      <TableCell align="center">
        <Grid container justify="center" spacing={1}>
          {tags.map((tag) =>
            // console.log(tag);
            tag ? (
              <Grid item>
                <TagButton label={tag}></TagButton>
              </Grid>
            ) : null
          )}
        </Grid>
      </TableCell>
      <TableCell align="center">
        {isTaxClaimable ? (
          <CheckCircleIcon color="primary" />
        ) : (
          <CheckCircleOutlineIcon color="primary" />
        )}
      </TableCell>
      <TableCell align="center">{percentage}%</TableCell>
    </TableRow>
  );
};

export default TransactionRow;
