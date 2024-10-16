import React, { useState } from "react";
import Form from "./form/Form";
import BalanceSummery from "./balance-summery/BalanceSummery";
import Expense from "./expense/Expense";
import Income from "./income/Income";

export default function ExpanseBord() {
  const [type, setType] = useState("Expense");
  const [transactionEntry, setTransactionEntry] = useState([]);

  const [transaction, setTransaction] = useState({
    category: "",
    amount: "",
    date: "",
  });
  // handle form submission
  const handleEntrySubmission = (evnt, transaction) => {
    evnt.preventDefault();
    // adding id for detecting the entry and also add the entry type, keep form componet simple and logic in the main component
    let modifyedTransaction = {
      ...transaction,
      id: Date.now(),
      transactionType: type,
    };
    setTransactionEntry([...transactionEntry, modifyedTransaction]);

    // reseting form after submiting
    setTransaction({
      category: "",
      amount: "",
      date: "",
    });
    console.log(modifyedTransaction, "log from expense bord");
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

  const shortEntrys = (order, whereToPerform) => {
    let oppsite = whereToPerform === "Income" ? "Expense" : "Income";
    const sortedEntries = [...transactionEntry]
      .filter((entry) => entry.transactionType === whereToPerform)
      .sort((a, b) => {
        const amountA = Number(a.amount);
        const amountB = Number(b.amount);
        return order === "asc" ? amountA - amountB : amountB - amountA;
      });

    // Update state to trigger re-render with sorted expense entries
    setTransactionEntry((prevEntries) => {
      // Combine sorted expenses with unmodified  entries
      const oppositeEntries = prevEntries.filter(
        (entry) => entry.transactionType === oppsite
      );
      return [...oppositeEntries, ...sortedEntries];
    });
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
        />

        <div className="lg:col-span-2">
          <BalanceSummery transactionData={dataForTransactionSummary} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Income incomeTransactions={incomeTransactions} />
            <Expense
              expenseTransactions={expenseTransactions}
              shortEntrys={shortEntrys}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
