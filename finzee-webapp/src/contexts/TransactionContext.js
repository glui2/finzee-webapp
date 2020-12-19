import React, { createContext, Component } from "react";
import React, { useEffect } from "react";
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
    var allTransactions = [];
    axios
      .get("https://taxy-298609.ts.r.appspot.com/get_trans_in_date", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        // console.log(response);
        allTransactions = response.data.map((obj) => {
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
          console.log(tableRow);
          return tableRow;
        });
        // console.log(allTransactions);
      });
    console.log(allTransactions);
    return allTransactions;
  };

  showClaimableTransactions = () => {
    // const claimableTransactions = this.retrieveTransactions();
    this.setState(() => {
      return {
        showAllTransactions: false,
        // transactions: claimableTransactions,
      };
    });
  };

  showAllTransactions = () => {
    // const allTransactions = this.retrieveTransactions();
    this.setState(() => {
      return {
        showAllTransactions: true,
        // transactions: allTransactions,
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
