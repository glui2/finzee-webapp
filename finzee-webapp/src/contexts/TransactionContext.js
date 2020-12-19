import React, { createContext, Component } from "react";
import axios from "axios";

export const TransactionContext = createContext();

class TransactionContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = props.initialState
      ? props.initialState
      : { showAllTransactions: false, transactions: [] };
  }

  retrieveTransactions = () => {
    console.log("get transactions");
    axios
      .get("https://taxy-298609.ts.r.appspot.com/get_trans_in_date")
      .then((response) => {
        console.log(response);
        var allTransactions = response.map((obj) => {
          var tableRow = {};
          if (!this.state.showAllTransactions || obj.isTaxClaimable) {
            tableRow = {
              name: obj.name,
              amount: obj.amount,
              time: obj.bookingDateTime,
              tags: obj.tags,
              isTaxClaimable: obj.claimFlag,
              percentage: obj.claimPercentage,
            };
          }
          return tableRow;
        });
        console.log(allTransactions);
        return allTransactions;
      });
  };

  showClaimableTransactions = () => {
    this.setState(() => {
      return {
        showAllTransactions: false,
        transactions: this.retrieveTransactions,
      };
    });
  };

  showAllTransactions = () => {
    this.setState(() => {
      return {
        showAllTransactions: true,
        transactions: this.retrieveTransactions,
      };
    });
  };

  render() {
    return (
      <TransactionContext.Provider
        value={{
          transactions: this.state.transactions,
          showClaimableTransactions: this.showClaimableTransactions,
          showAllTransactions: this.showAllTransactions,
        }}
      >
        {this.props.children}
      </TransactionContext.Provider>
    );
  }
}

export default TransactionContextProvider;
