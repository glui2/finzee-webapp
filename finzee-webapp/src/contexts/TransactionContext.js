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
    axios
      .get("https://taxy-298609.ts.r.appspot.com/get_trans_in_date")
      .then((response) => {
        console.log(response);
        var allTransactions = response.map((obj) => {
          if (!this.state.showAllTransactions || obj.isTaxClaimable) {
            return {
              name: obj.name,
              amount: obj.amount,
              time: obj.bookingDateTime,
              tags: obj.tags,
              isTaxClaimable: obj.claimFlag,
              percentage: obj.claimPercentage,
            };
          }
        });
        this.setState({ transactions: allTransactions });
      });
  };

  showClaimableTransactions = () => {
    this.setState((prevState, props) => {
      return {
        showAllTransactions: false,
        retrieveTransactions: this.retrieveTransactions,
      };
    });
  };

  showAllTransactions = () => {
    this.setState((prevState, props) => {
      return {
        showAllTransactions: true,
        retrieveTransactions: this.retrieveTransactions,
      };
    });
  };

  render() {
    return (
      <TransactionContext.Provider
        value={{
          ...this.state,
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
