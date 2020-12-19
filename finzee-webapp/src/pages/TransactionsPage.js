import React from "react";
import { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import TransactionsTable from "../components/TransactionsTable.js";
import TransactionContext from "../contexts/TransactionContext.js";
import "./TransactionsPage.css";

const TransactionsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <TransactionContext.Consumer>
      {(context) => {
        // const { showClaimableTransactions, showAllTransactions } = context;
        return (
          <div className="transactions-page">
            <h1>Transactions</h1>
            {/* AppBar may not be needed */}
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
                <Tab label="All Items" onClick={context.showAllTransactions} />
              </Tabs>
            </AppBar>
            <TransactionsTable></TransactionsTable>
          </div>
        );
      }}
    </TransactionContext.Consumer>
  );
};
export { TransactionsPage };
