import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();

export const TransactionContextProvider = (props) => {
  var [allTransactions, setAllTransactions] = useState(false);
  var [transactions, setTransactions] = useState([]);

  //     constructor(props) {
  //     super(props);

  //     this.state = props.initialState
  //       ? props.initialState
  //       : { showAllTransactions: false, transactions: [] };
  //   }

  useEffect(async () => {
    console.log("get transactions");
    var retrievedTransactions = [];
    await axios
      .get("https://taxy-298609.ts.r.appspot.com/get_trans_in_date", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        retrievedTransactions = response.data.map((obj) => {
          var tableRow = {};
          if (allTransactions || obj.claimFlag) {
            tableRow = {
              name: obj.description,
              amount: obj.amount + " " + obj.currency,
              time: obj.bookingDateTime,
              tags: obj.tags,
              isTaxClaimable: obj.claimFlag,
              percentage: obj.claimPercentage,
            };
          }
          //   console.log(tableRow);
          return tableRow;
        });
        // console.log(allTransactions);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(retrievedTransactions);
    setTransactions(retrievedTransactions);
  }, [allTransactions]);

  //   retrieveTransactions = () => {
  //     console.log("get transactions");
  //     var allTransactions = [];
  //     axios
  //       .get("https://taxy-298609.ts.r.appspot.com/get_trans_in_date", {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       })
  //       .then((response) => {
  //         // console.log(response);
  //         allTransactions = response.data.map((obj) => {
  //           var tableRow = {};
  //           if (!this.state.showAllTransactions || obj.isTaxClaimable) {
  //             tableRow = {
  //               name: obj.name,
  //               amount: obj.amount,
  //               time: obj.bookingDateTime,
  //               tags: obj.tags,
  //               isTaxClaimable: obj.claimFlag,
  //               percentage: obj.claimPercentage,
  //             };
  //           }
  //           console.log(tableRow);
  //           return tableRow;
  //         });
  //         // console.log(allTransactions);
  //       });
  //     console.log(allTransactions);
  //     return allTransactions;
  //   };

  const showClaimableTransactions = () => {
    setAllTransactions(false);
    // const claimableTransactions = this.retrieveTransactions();
    // this.setState(() => {
    //   return {
    //     showAllTransactions: false,
    //     // transactions: claimableTransactions,
    //   };
    // });
  };

  const showAllTransactions = () => {
    setAllTransactions(true);
    // const allTransactions = this.retrieveTransactions();
    // this.setState(() => {
    //   return {
    //     showAllTransactions: true,
    //     // transactions: allTransactions,
    //   };
    // });
  };

  //   render() {
  return (
    <TransactionContext.Provider
      value={{
        transactions: transactions,
        showClaimableTransactions,
        showAllTransactions,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
  //   }
};

export default TransactionContext;
