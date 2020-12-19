import React from "react";
import { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TransactionsTable from "../components/TransactionsTable.js";
import "./TransactionsPage.css";

const TransactionsPage = () => {
  return (
    <TransactionContext.Consumer>
      {(context) => {
        const { toggleClaimableTransactions } = context;
        <div className="transactions-page">
          <h1>Transactions</h1>
          {/* AppBar may not be needed */}
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Tax Claimable Items" />
              <Tab label="All Items" />
            </Tabs>
          </AppBar>
          <TransactionsTable></TransactionsTable>
        </div>;
      }}
    </TransactionContext.Consumer>
  );
};
export { TransactionsPage };
