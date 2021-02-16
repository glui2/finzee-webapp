import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

var dummyData = [
  {
    professional: "Chris Evans",
    date: "2020/12/15",
    status: "Pending",
  },
  {
    professional: "Brie Larson",
    date: "2020/12/12",
    status: "Cancelled",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  actionButton: {
    borderRadius: "10em",
  },
});

const Professionals = () => {
  var classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Professionals</TableCell>
            <TableCell align="center">Date booked</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Previous Invoice</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow>
              <TableCell>{row.professional}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <Button
                  className={classes.actionButton}
                  variant="outlined"
                  color="primary"
                >
                  Download PDF
                </Button>
              </TableCell>
              <TableCell align="center">
                <Grid container justify="center" spacing={1}>
                  <Grid item>
                    <Button
                      className={classes.actionButton}
                      variant="outlined"
                      color="primary"
                    >
                      Chat
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.actionButton}
                      variant="outlined"
                      color="primary"
                    >
                      New Session
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.actionButton}
                      variant="outlined"
                      color="primary"
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Professionals;
