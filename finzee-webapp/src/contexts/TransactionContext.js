import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();

export const TransactionContextProvider = (props) => {
  var [allTransactions, setAllTransactions] = useState(false);
  var [transactions, setTransactions] = useState([]);

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

          return tableRow;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(retrievedTransactions);
    setTransactions(retrievedTransactions);
  }, [allTransactions]);

  const showClaimableTransactions = () => {
    setAllTransactions(false);
  };

  const showAllTransactions = () => {
    setAllTransactions(true);
  };

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
};

export default TransactionContext;
