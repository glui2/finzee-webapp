import React from "react";
import { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import TransactionsTable from "../components/TransactionsTable.js";
import TransactionContext from "../contexts/TransactionContext.js";
import Typography from "@material-ui/core/Typography";
import "./TransactionsPage.css";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    verticalAlign: "center",
    marginTop: "30px",
  },
}));

const TransactionsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <TransactionContext.Consumer>
      {(context) => {
        // const { showClaimableTransactions, showAllTransactions } = context;
        return (
          <div className="transactions-page">
            <Grid
              container
              direction="column"
              spacing={5}
              justify="space-between"
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align="left"
                  color="primary"
                  className={classes.heading}
                >
                  <strong>Transactions</strong>
                </Typography>
              </Grid>
              <Grid item>
                <AppBar position="static" color="default">
                  <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    onChange={handleTabChange}
                    value={selectedTab}
                  >
                    <Tab
                      label="Tax Claimable Items"
                      onClick={context.showClaimableTransactions}
                    />
                    <Tab
                      label="All Items"
                      onClick={context.showAllTransactions}
                    />
                  </Tabs>
                </AppBar>
              </Grid>
              <Grid item>
                <TransactionsTable></TransactionsTable>
              </Grid>
            </Grid>
          </div>
        );
      }}
    </TransactionContext.Consumer>
  );
};
export { TransactionsPage };
