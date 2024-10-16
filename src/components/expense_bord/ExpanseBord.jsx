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

  const handleEntrySubmission = (evnt, transaction) => {
    evnt.preventDefault();
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
            <Income />
            <Expense />
          </div>
        </div>
      </section>
    </main>
  );
}
