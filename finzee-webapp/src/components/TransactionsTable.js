import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TransactionRow from "./TransactionRow.js";
import { TransactionContext } from "../contexts/TransactionContext.js";

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
        const { transactions } = context;

        return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Items</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Location &amp; Time</TableCell>
                  <TableCell align="right">Tags</TableCell>
                  <TableCell align="right">Tax-claimable?</TableCell>
                  <TableCell align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {transactions.map((row) => (
                  <TransactionRow
                    name={row.name}
                    amount={row.amount}
                    time={row.time}
                    tags={row.tags}
                    isTaxClaimable={row.isTaxClaimable}
                    percentage={row.percentage}
                  ></TransactionRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    </TransactionContext.Consumer>
  );
}
