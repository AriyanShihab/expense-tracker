import React from "react";
import AmountShower from "./AmountShower";

export default function BalanceSummery({ data = [] }) {
  let totalIncome = data
    .filter((data) => data.typeOfAmmount === "Income")
    .reduce((acc, current) => acc + Number(current.amount), 0);
  let totalExpense = data
    .filter((data) => data.typeOfAmmount === "Expense")
    .reduce((acc, current) => acc + Number(current.amount), 0);

  let totalBalance = totalIncome - totalExpense;

  // 0
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <AmountShower amountType={"Balance"} amount={totalBalance} />
          <AmountShower amountType={"Total Income"} amount={totalIncome} />
          <AmountShower amountType={"Total Expense"} amount={totalExpense} />
        </dl>
      </div>
    </div>
  );
}
