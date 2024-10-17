import React, { useState } from "react";
import Form from "./form/Form";
import BalanceSummery from "./balance-summery/BalanceSummery";
import Expense from "./expense/Expense";
import Income from "./income/Income";

export default function ExpanseBord() {
  const [type, setType] = useState("Expense"); // use for form tab function and tracsaction type
  const [transactionEntry, setTransactionEntry] = useState([]); // store all the entry in single place, this will help us to wriete less condition on edit and delete function
  const [entryToBeUpdate, setEntryToBeUpdate] = useState(null); // used for store wich entry to updated...
  const [typeOfFormAction, setTypeOfFormAction] = useState({}); // tells from to open desired mode, then form tells ExpneseBord to perfoma oparetion dased on that mode
 
  const [transaction, setTransaction] = useState(
    entryToBeUpdate || {
      category: "",
      amount: "",
      date: "",
    }
  );

  // handle form submission
  const handleEntrySubmission = (evnt, transaction, actionType) => {
    evnt.preventDefault();
    // adding id for detecting the entry and also add the entry type, keep form componet simple and logic in the main component
    if (actionType !== "Edit") {
      // if it's not edit, then its must be add...
      let modifyedTransaction = {
        ...transaction,
        id: Date.now(),
        transactionType: type,
      };
      setTransactionEntry([...transactionEntry, modifyedTransaction]);
    } else {
      // if it edit, map on the transaction and find the edit entry and replace with update data
      setTransactionEntry(
        [...transactionEntry].map((entry) => {
          if (entry.id === transaction.id) {
            return transaction;
          }
          return entry;
        })
      );
    }

    // reseting form after submiting
    setTransaction({
      category: "",
      amount: "",
      date: "",
    });
    // going back to normel mode of the form...
    setTypeOfFormAction({});
  };
  // calculating data for BalanceSummuery component
  const dataForTransactionSummary = transactionEntry.reduce(
    (acc, current) => {
      if (current.transactionType === "Income") {
        acc.income += Number(current.amount);
      } else if (current.transactionType === "Expense") {
        acc.expense += Number(current.amount);
      }

      acc.balance = acc.income - acc.expense;
      return acc;
    },
    { income: 0, expense: 0, balance: 0 }
  );
// sort the entrys, where to perform tells wich type entry to be sorted, ensure when we sor expense data, it's not sort income data. and vice verca..
  const shortEntrys = (order, whereToPerform) => {
    let oppsite = whereToPerform === "Income" ? "Expense" : "Income";
    const sortedEntries = [...transactionEntry]
      .filter((entry) => entry.transactionType === whereToPerform)
      .sort((a, b) => {
        const amountA = Number(a.amount);
        const amountB = Number(b.amount);
        return order === "asc" ? amountA - amountB : amountB - amountA;
      });

    // Update state  with sorted expense entries
    setTransactionEntry((prevEntries) => {
      // Combine sorted entries with unmodified  entries
      const oppositeEntries = prevEntries.filter(
        (entry) => entry.transactionType === oppsite
      );
      return [...oppositeEntries, ...sortedEntries];
    });
  };

  const handleEditOfEntry = (entry) => {
    setTransaction({ ...entry });
    // update type stae based on witch type of entry we are editing...
    setType(entry.transactionType);
    setTypeOfFormAction({ type: "Edit", entryToBeUpdated: entry });
  };

  // function fro deleting entry
  const handleDeletationOfEntry = (entry) => {
    const permission = window.confirm(
      `are you sure? this will delete the ${entry.transactionType} entry you have made on ${entry.date} `
    );
    if (permission) {
      const shallow = transactionEntry.filter((previousEntrys) => {
        return previousEntrys.id !== entry.id;
      });
      setTransactionEntry(shallow);
      window.alert("Entry has been deleted successfully!");
    } else {
      window.alert(
        "since you don't agree in confirm box, no delete action will be performed...!"
      );
    }
  };

  // calculate data for income expense  components

  const incomeTransactions = transactionEntry.filter(
    (entry) => entry.transactionType === "Income"
  );
  const expenseTransactions = transactionEntry.filter(
    (entry) => entry.transactionType === "Expense"
  );

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Form
          onSubmission={handleEntrySubmission}
          type={type}
          setType={setType}
          transaction={transaction}
          setTransaction={setTransaction}
          typeOfFormAction={typeOfFormAction}
        />

        <div className="lg:col-span-2">
          <BalanceSummery transactionData={dataForTransactionSummary} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Income
              incomeTransactions={incomeTransactions}
              shortEntrys={shortEntrys}
              handleEditOfEntry={handleEditOfEntry}
              handleDeletationOfEntry={handleDeletationOfEntry}
            />
            <Expense
              expenseTransactions={expenseTransactions}
              shortEntrys={shortEntrys}
              handleEditOfEntry={handleEditOfEntry}
              handleDeletationOfEntry={handleDeletationOfEntry}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
