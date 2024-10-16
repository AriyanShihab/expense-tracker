import React, { useState } from "react";
import AmountShower from "./AmountShower";

export default function BalanceSummery({ transactionData }) {
  const { income, expense, balance } = transactionData;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <AmountShower
            amountToDisplay={balance}
            amountTypeText={"Balance"}
            isNegetiveRed
          />
          <AmountShower amountToDisplay={income} amountTypeText={"Income"} />
          <AmountShower amountToDisplay={expense} amountTypeText={"Expense"} />
        </dl>
      </div>
    </div>
  );
}
