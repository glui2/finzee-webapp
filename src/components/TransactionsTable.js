import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TransactionRow from "./TransactionRow.js";
import TransactionContext from "../contexts/TransactionContext.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TransactionTable() {
  const classes = useStyles();

  return (
    <TransactionContext.Consumer>
      {(context) => {
        // const { transactions } = context;

        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Transactions</TableCell>
                  <TableCell align="center">Comments</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Tags</TableCell>
                  <TableCell align="center">Claimable</TableCell>
                  <TableCell align="center">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {context.transactions.map((row) => (
                  <TransactionRow
                    name={row.name}
                    comment={row.comment}
                    amount={row.amount}
                    time={row.time}
                    tags={row.tags}
                    isTaxClaimable={row.isTaxClaimable}
                    percentage={row.percentage}
                  ></TransactionRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    </TransactionContext.Consumer>
  );
}
