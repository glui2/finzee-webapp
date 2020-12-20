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
          if (allTransactions || obj.claimFlag == true) {
            var tableRow = {};
            // console.log(obj);
            tableRow = {
              name: obj.description,
              amount: obj.amount + " " + obj.currency,
              comment: obj.comment,
              time: obj.bookingDateTime,
              tags: obj.tags,
              isTaxClaimable: obj.claimFlag,
              percentage: obj.claimPercentage,
            };
            return tableRow;
          }

          return;
        });
      })
      .catch((error) => {
        console.log(error);
      });

    var filteredTransactions = retrievedTransactions.filter(
      (object) => object != null
    );
    setTransactions(filteredTransactions);
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
